<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="portlet" uri="http://java.sun.com/portlet" %>

<portlet:resourceURL var="getProductsForPageResource" id="getProductsForPage"/>

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
			field : 'productDetails.sku',
			title : '<spring:message code="Sku" />',
			width : 80
		}, {
			field : 'productDetails.productType',
			title : '<spring:message code="Product-type" />',
			width : 80
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
			var getSelected = $dataGrid.datagrid('getSelected');
			console.log("Add: " + getSelected);
		}
	});
	
	$productEditBtn.click(function(){
		if (!($productEditBtn.linkbutton('options').disabled)) {
			console.log("Edit");
		}
	});
	
	$productRemoveBtn.click(function(){
		if (!($productRemoveBtn.linkbutton('options').disabled)) {
			var nr =  $dataGrid.datagrid('getSelections').length;
			console.log("remove: " + nr);
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


