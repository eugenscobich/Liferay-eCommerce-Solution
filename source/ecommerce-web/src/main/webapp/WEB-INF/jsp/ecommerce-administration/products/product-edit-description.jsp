<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="portlet" uri="http://java.sun.com/portlet" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<div>
    <div id="ecommerce-admin-product-description-tab" >  
    	<c:forEach items="${product.productDescriptions}" var="productDescription" varStatus="i">
    		<div title='${productDescription.language.code}'>
	    		<ul class="title-value-pair">
					<li class="w100px">
						<form:label path="productDescriptions[${i.index}].isDefault" for="productDescriptions${i.index}.isDefault1"><spring:message code="Default" />:</form:label>
					</li>
					<li>
						<form:checkbox path="productDescriptions[${i.index}].isDefault" 
						value="true" cssClass="product-description-is-default-selector" 
						cssErrorClass="field-has-errors" />
					</li>
				</ul>
				<ul class="title-value-pair">
					<li class="w100px">
						<form:label path="productDescriptions[${i.index}].description"><spring:message code="Description" />:</form:label>
					</li>
					<li>
						<form:textarea path="productDescriptions[${i.index}].description"/>
					</li>
				</ul>
    			
        	</div>
    	</c:forEach>
    	<div id="ecommerce-admin-product-description-tab-tools">
			<a href="#" class="easyui-linkbutton" plain="true" iconCls="icon-add"><spring:message code="Add"/></a>
		</div>
    </div>  
</div>

<script>
$(function(){
	$('#ecommerce-admin-product-description-tab').tabs({
		tools: '#ecommerce-admin-product-description-tab-tools'
	});
	var $productDescriptionIsDefaultCheckBoxes = $('.product-description-is-default-selector');
	$productDescriptionIsDefaultCheckBoxes.change(function(){
		var $productDescriptionIsDefaultCheckBox = $(this);
		$productDescriptionIsDefaultCheckBoxes.prop('checked', false);
		$productDescriptionIsDefaultCheckBox.prop('checked', true);
	});
});
</script>


