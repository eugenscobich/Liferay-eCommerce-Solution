<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="portlet" uri="http://java.sun.com/portlet" %>
<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<div>
	<form:form action="" method="post" modelAttribute="product">
	    <div id="ecommerce-admin-product-tab" class="easyui-tabs">  
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
    </form:form> 
</div>

<script>
</script>


