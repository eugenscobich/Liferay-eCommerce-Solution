<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="portlet" uri="http://java.sun.com/portlet" %>

<portlet:resourceURL var="getProductsForPageResource" id="getProductsForPage"/>
<portlet:actionURL var="addProductAction" name="add-product"/>
<portlet:actionURL var="editProductAction" name="edit-product"/>
<portlet:actionURL var="removeProductsAction" name="remove-products"/>


<div>
	<div id="ecommerce-admin-products-toolbar">
		<a href="#" id="product-add"><spring:message code="Add" /></a>
		<a href="#" id="product-edit"><spring:message code="Edit" /></a>
		<a href="#" id="product-remove"><spring:message code="Remove" /></a>
	</div>
	<div>
		<table id="ecommerce-admin-products-table" title='<spring:message code="Products"/>'></table>
	</div>
</div>


<script>
$(function() {
	var $dataGrid = $('#ecommerce-admin-products-table').datagrid({  
	    url:'${getProductsForPageResource}',  
	    pagination: true,
	    rownumbers: true,
	    fitColumns: true,
	    idField:'id',  
		onSelect: refreshButtons,
		onUnselect: refreshButtons,
		onSelectAll: refreshButtons,
		onUnselectAll: refreshButtons,
		singleSelect: false,
		toolbar: '#ecommerce-admin-products-toolbar',
	    columns : [ [ {
			field : 'id',
			hidden: true
		}, {
			field : 'ck',
			checkbox : true
		}, {
			field : 'productDescriptions[0].name',
			title : '<spring:message code="Name" />',
			width:100
		}, {
			field : 'productDetails.sku',
			title : '<spring:message code="Sku" />',
			width:100
		}, {
			field : 'productDetails.productType',
			title : '<spring:message code="Product-type" />',
			width:100
		} ] ]
	});  
	
	
	var $productAddBtn = $('#product-add').linkbutton({
		iconCls: 'icon-add',
	    plain: true
	});
	
	var $productEditBtn = $('#product-edit').linkbutton({
		iconCls: 'icon-edit',
	    plain:true ,
	    disabled: true
	});
	
	var $productRemoveBtn = $('#product-remove').linkbutton({
		iconCls: 'icon-remove',
	    plain: true,
	    disabled: true
	});
	
	$productAddBtn.click(function(){
		if (!($productAddBtn.linkbutton('options').disabled)) {
			var actionUrl = "${addProductAction}";
			$productAddBtn.posthref(actionUrl, {});
		}
	});
	
	$productEditBtn.click(function(){
		if (!($productEditBtn.linkbutton('options').disabled)) {
			var $row = $dataGrid.datagrid('getSelected');
			var actionUrl = "${editProductAction}";
			$productEditBtn.posthref(actionUrl, {productId: $row.id});
		}
	});
	
	$productRemoveBtn.click(function(){
		if (!($productRemoveBtn.linkbutton('options').disabled)) {
			var nr =  $dataGrid.datagrid('getSelections').length;
			var title = '<spring:message code="Delete"/> ' + nr;
			title += nr <= 1 ? ' <spring:message code="product"/>' : ' <spring:message code="products"/>';
			var message = '<spring:message code="Are-you-really-want-to-delete"/> ' + nr;
			message += nr <= 1 ? ' <spring:message code="product"/>' : ' <spring:message code="products"/>';
			$.messager.confirm(title, message, function(response){
				if (response){
					var ids = $.map($dataGrid.datagrid('getSelections'), function(item, index){
					      return item.id;
				    });
					var actionUrl = "${removeProductsAction}";
					$productEditBtn.posthref(actionUrl, {productIds: ids});
				};
			});
		}
	});

	function refreshButtons(rowIndex, rowData) {
		if ($dataGrid.datagrid('getSelections').length == 0) {
			$productEditBtn.linkbutton('disable');
			$productRemoveBtn.linkbutton('disable');
		} else if ($dataGrid.datagrid('getSelections').length == 1) {
			$productEditBtn.linkbutton('enable');
			$productRemoveBtn.linkbutton('enable');
		} else {
			$productEditBtn.linkbutton('disable');
			$productRemoveBtn.linkbutton('enable');
		}
	}
});
</script>


