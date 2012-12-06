<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="portlet" uri="http://java.sun.com/portlet" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<div>
    <div id="ecommerce-admin-product-description-tab" class="easyui-tabs">  
    	<c:forEach items="${product.productDescriptions}" var="productDescription" varStatus="i">
    		<div title='${productDescription.language.code}'>
    			<form:textarea path="productDescriptions[${i.index}].description"/>
        	</div>
    	</c:forEach>
    </div>  
</div>

<script>
</script>


