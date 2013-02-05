<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="portlet" uri="http://java.sun.com/portlet"%>
<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles"%>

<portlet:resourceURL var="getAllActiveCatalogsResource" id="getAllActiveCatalogs"/>

<div class="ecommerce-catalogs">
	<ul id="ecommerce-catalogs-tree"></ul>  
	
</div>
<script>
$(function() {
	var $catalogsTree = $('#ecommerce-catalogs-tree');
	$catalogsTree.tree({  
	    url: '${getAllActiveCatalogsResource}'  
	});  
});
</script>
