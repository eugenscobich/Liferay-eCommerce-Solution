<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="portlet" uri="http://java.sun.com/portlet" %>
<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>

<portlet:actionURL var="saveCatalogAction" name="save-catalog"/>

<div>
	<form:form action="${saveCatalogAction}" method="post" modelAttribute="catalog" id="ecommerce-admin-catalog-save-form">
		<input type="hidden" value="${catalog.id}" name="catalogId">
	    <div id="ecommerce-admin-catalog-tab">
	    
	    	<c:set var="catalogDescriptionsTabIconCls" value='iconCls="icon-pencil"' />
	    	<c:forEach items="${catalog.catalogDescriptions}" var="catalogDescription" varStatus="i">
				<spring:bind path="catalogDescriptions[${i.index}].*">
					<c:if test="${status.error}">
						<c:set var="catalogDescriptionsTabIconCls" value='iconCls="icon-no"' /> 
					</c:if>
				</spring:bind>
	    	</c:forEach>
			
			<div title='<spring:message code="Descriptions"/>' ${catalogDescriptionsTabIconCls}>  
	            <tiles:insertDefinition name="catalog-edit-description" />
	        </div>
			
			<c:set var="catalogDetailsTabIconCls" value='iconCls="icon-pencil"' />
	    	<spring:bind path="catalogDetails.*">
				<c:if test="${status.error}">
					<c:set var="catalogDetailsTabIconCls" value='iconCls="icon-no"' /> 
				</c:if>
			</spring:bind>
   			<div title='<spring:message code="Details"/>' ${catalogDetailsTabIconCls}>  
	            <tiles:insertDefinition name="catalog-edit-details" />
	        </div>
	
	        <div title='<spring:message code="Prices"/>'>  
	            Prices
	        </div>  
	    </div> 
	    <div id="ecommerce-admin-catalog-tab-tools">
			<a href="#" id="catalog-save"><spring:message code="Save"/></a>
		</div>
    </form:form> 
</div>

<script>
$(function(){
	$('#ecommerce-admin-catalog-tab').tabs({
		tools: '#ecommerce-admin-catalog-tab-tools'
	});
	
	var $catalogSaveBtn = $('#catalog-save').linkbutton({
		iconCls: 'icon-save',
	    plain: true
	});
	
	$catalogSaveBtn.click(function(){
		if (!($catalogSaveBtn.linkbutton('options').disabled)) {
			$('#ecommerce-admin-catalog-save-form').submit();
		}
	});
});
</script>


