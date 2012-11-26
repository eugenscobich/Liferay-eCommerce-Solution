<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="portlet" uri="http://java.sun.com/portlet"%>
<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<div class="ecommerce-admin">
	<div class="ecommerce-admin-menu">
		<tiles:importAttribute name="menuIndex" scope="request" />
		<tiles:insertDefinition name="admin-menu" />
	</div>
	<div class="ecommerce-admin-content">
		<tiles:insertAttribute name="admin-content" />
	</div>
</div>


