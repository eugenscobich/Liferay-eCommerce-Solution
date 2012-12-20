<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="portlet" uri="http://java.sun.com/portlet" %>

<portlet:resourceURL var="getCatalogsForPageResource" id="getCatalogsForPage"/>
<portlet:actionURL var="addCatalogAction" name="add-catalog"/>
<portlet:actionURL var="editCatalogAction" name="edit-catalog"/>
<portlet:actionURL var="removeCatalogsAction" name="remove-catalogs"/>


<div>
	<div id="ecommerce-admin-catalogs-toolbar">
		<a href="#" id="catalog-add"><spring:message code="Add" /></a>
		<a href="#" id="catalog-edit"><spring:message code="Edit" /></a>
		<a href="#" id="catalog-remove"><spring:message code="Remove" /></a>
	</div>
	<div>
		<table id="ecommerce-admin-catalogs-table" title='<spring:message code="Catalogs"/>'></table>
	</div>
</div>


<script>
$(function() {
	var $dataGrid = $('#ecommerce-admin-catalogs-table').datagrid({  
	    url:'${getCatalogsForPageResource}',  
	    pagination: true,
	    rownumbers: true,
	    fitColumns: true,
	    idField:'id',  
		onSelect: refreshButtons,
		onUnselect: refreshButtons,
		onSelectAll: refreshButtons,
		onUnselectAll: refreshButtons,
		singleSelect: false,
		toolbar: '#ecommerce-admin-catalogs-toolbar',
	    columns : [ {
			field : 'id',
			hidden: true
		}, {
			field : 'ck',
			checkbox : true
		}, {
			field : 'catalogDescriptions[0].name',
			title : '<spring:message code="Name" />',
			width:100
		} ]
	});  
	
	
	var $catalogAddBtn = $('#catalog-add').linkbutton({
		iconCls: 'icon-add',
	    plain: true
	});
	
	var $catalogEditBtn = $('#catalog-edit').linkbutton({
		iconCls: 'icon-edit',
	    plain:true ,
	    disabled: true
	});
	
	var $catalogRemoveBtn = $('#catalog-remove').linkbutton({
		iconCls: 'icon-remove',
	    plain: true,
	    disabled: true
	});
	
	$catalogAddBtn.click(function(){
		if (!($catalogAddBtn.linkbutton('options').disabled)) {
			var actionUrl = "${addCatalogAction}";
			$catalogAddBtn.posthref(actionUrl, {});
		}
	});
	
	$catalogEditBtn.click(function(){
		if (!($catalogEditBtn.linkbutton('options').disabled)) {
			var $row = $dataGrid.datagrid('getSelected');
			var actionUrl = "${editCatalogAction}";
			$catalogEditBtn.posthref(actionUrl, {catalogId: $row.id});
		}
	});
	
	$catalogRemoveBtn.click(function(){
		if (!($catalogRemoveBtn.linkbutton('options').disabled)) {
			var nr =  $dataGrid.datagrid('getSelections').length;
			var title = '<spring:message code="Delete"/> ' + nr;
			title += nr <= 1 ? ' <spring:message code="catalog"/>' : ' <spring:message code="catalogs"/>';
			var message = '<spring:message code="Are-you-really-want-to-delete"/> ' + nr;
			message += nr <= 1 ? ' <spring:message code="catalog"/>' : ' <spring:message code="catalogs"/>';
			$.messager.confirm(title, message, function(response){
				if (response){
					var ids = $.map($dataGrid.datagrid('getSelections'), function(item, index){
					      return item.id;
				    });
					var actionUrl = "${removeCatalogsAction}";
					$catalogEditBtn.posthref(actionUrl, {catalogIds: ids});
				};
			});
		}
	});

	function refreshButtons(rowIndex, rowData) {
		if ($dataGrid.datagrid('getSelections').length == 0) {
			$catalogEditBtn.linkbutton('disable');
			$catalogRemoveBtn.linkbutton('disable');
		} else if ($dataGrid.datagrid('getSelections').length == 1) {
			$catalogEditBtn.linkbutton('enable');
			$catalogRemoveBtn.linkbutton('enable');
		} else {
			$catalogEditBtn.linkbutton('disable');
			$catalogRemoveBtn.linkbutton('enable');
		}
	}
});
</script>


