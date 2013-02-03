<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="portlet" uri="http://java.sun.com/portlet" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>

<portlet:resourceURL var="getCatalogsForPageResource" id="getCatalogsForPage"/>
<div>
    <div id="ecommerce-admin-product-catalogs-tab" >  
		<form:hidden path="catalogs"/>
		<form:errors path="catalogs" cssClass="field-error"/>	
		<table id="ecommerce-admin-catalogs-table" title='<spring:message code="Catalogs"/>'></table>
    </div>
</div>

<script>
$(function(){
	var $dataGrid = $('#ecommerce-admin-catalogs-table').treegrid({  
	    url:'${getCatalogsForPageResource}',  
	    pagination: true,
	    pageSize: 2,
	    rownumbers: true,
	    fitColumns: true,
	    idField: 'id', 
	    treeField: 'catalogDescriptions[0].name',
		singleSelect: false,
		onSelect: selectCatalog,
		onUnselect: unSelectCatalog,
		onSelectAll: selectAllCatalog,
		onUnselectAll: unSelectAllCatalog,
	    columns : [[ {
			field: 'id',
			hidden: true
		}, {
			field: 'ck',
			checkbox: true
		}, {
			field: 'catalogDescriptions[0].name',
			title: '<spring:message code="Name" />',
			width: 100
		} ]],
		onLoadSuccess: onLoadSuccess
	});  
	
	var $catalogs = $('#ecommerce-admin-product-catalogs-tab input[name="catalogs"]');
	
	function selectCatalog($row) {
		var values = $catalogs.val();
		var splits = values.split(",");
		var exist = false;
		if (!existRowIdInValues($row.id, splits)) {
			if (values.length > 0) {
				values = values + ",";
			}
			values = values + $row.id;
			$catalogs.val(values);
		}
	}
	
	function unSelectCatalog($row) {
		var value = $catalogs.val();
		var splits = value.split(",");
		var values = "";
		$.each(splits, function(index, id) {
			if (id != $row.id) {
				values = values + id + ",";
			} 
		});
		$catalogs.val(values.substring(0, values.length - 1));
	}
	
	function existRowIdInValues(id, values) {
		var exist = false;
		for (var key in values) {
		    var val = values[key];
		    if (id == val) {
		    	exist = true;
		    	break;
		    }
		}
		return exist;
	}
	
	function selectAllCatalog($rows) {
		$.each($rows, function(index, $row) {
			selectCatalog($row);
			if ($row.children != "undefined" && $row.children.length > 0) {
				result = selectAllCatalog($row.children);
			}
		});
	}
	
	
	function unSelectAllCatalog($rows) {
		$.each($rows, function(index, $row) {
			unSelectCatalog($row);
			if ($row.children != "undefined" && $row.children.length > 0) {
				result = unSelectAllCatalog($row.children);
			}
		});
	}
	

	function onLoadSuccess(row, data) {
		var value = $catalogs.val();
		var splits = value.split(",");
		selectRows(splits, data.rows);
		
	}
	function selectRows(ids, $rows) {
		$.each($rows, function(index, $row){
			for (var key in ids) {
			    var val = ids[key];
			    if ($row.id == val) {
			    	$dataGrid.treegrid('select', val);
			    	break;
			    }
			}
			if ($row.children != "undefined" && $row.children.length > 0) {
				selectRows(ids, $row.children);
			}
		});
		
	}
});
</script>


