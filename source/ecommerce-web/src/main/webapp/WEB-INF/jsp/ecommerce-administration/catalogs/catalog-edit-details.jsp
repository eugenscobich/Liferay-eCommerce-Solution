<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="portlet" uri="http://java.sun.com/portlet" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>

<portlet:resourceURL var="getAllCatalogs" id="getAllCatalogs"/>

<div>
    <div id="ecommerce-admin-catalog-details-tab" >
   		<ul class="title-value-pair">
			<li class="w100px">
				<form:label path="parent"><spring:message code="Parent-Catalog" />:</form:label>
			</li>
			<li>
				<form:input path="parent" id="catalog-details-tab-parent-cbt"/>
				<form:errors path="parent" cssClass="field-error"/>
			</li>
		</ul>
	</div>
</div>

<script>
$(function() {
	var $combotree = $('#catalog-details-tab-parent-cbt').combotree({  
	    url: '${getAllCatalogs}',
	    valueField:'id',
	    panelHeight: 'auto'
	});
});
</script>


