<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="portlet" uri="http://java.sun.com/portlet" %>
<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles" %>

<div class="ecommerce-admin">
	
	<div>Select Store</div>
	<div class="ecommerce-admin-content">
		<tiles:insertAttribute name="admin-content"/>
	</div>
	<div class="ecommerce-admin-menu">
		<tiles:insertDefinition name="admin-menu"/>
	</div>
</div>


