<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="portlet" uri="http://java.sun.com/portlet" %>
<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>

<portlet:actionURL var="saveProductAction" name="save-product"/>

<div>
	<form:form action="${saveProductAction}" method="post" modelAttribute="product" id="ecommerce-admin-product-save-form">
	    <div id="ecommerce-admin-product-tab">  
	        <div title='<spring:message code="Descriptions"/>'>  
	            <tiles:insertDefinition name="product-edit-description" />
	        </div>  
	        <div title='<spring:message code="Details"/>'>  
	            Details
	        </div>  
	        <div title='<spring:message code="Prices"/>'>  
	            Prices
	        </div>  
	    </div> 
	    <div id="ecommerce-admin-product-tab-tools">
			<a href="#" id="product-save"><spring:message code="Save"/></a>
		</div>
    </form:form> 
</div>

<script>
$(function(){
	$('#ecommerce-admin-product-tab').tabs({
		tools: '#ecommerce-admin-product-tab-tools'
	});
	
	var $productSaveBtn = $('#product-save').linkbutton({
		iconCls: 'icon-save',
	    plain: true
	});
	
	$productSaveBtn.click(function(){
		if (!($productSaveBtn.linkbutton('options').disabled)) {
			$('#ecommerce-admin-product-save-form').submit();
		}
	});
});
</script>


