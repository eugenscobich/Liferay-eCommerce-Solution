<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="portlet" uri="http://java.sun.com/portlet" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<div>
    <div id="ecommerce-admin-product-description-tab" >  
    	<c:forEach items="${product.productDescriptions}" var="productDescription" varStatus="i">
    		<div title='<spring:message code="language.${productDescription.language.code}" />'>
	    		<ul class="title-value-pair">
					<li class="w100px">
						<form:label path="productDescriptions[${i.index}].isDefault" for="productDescriptions${i.index}.isDefault1"><spring:message code="Default" />:</form:label>
					</li>
					<li>
						<form:checkbox path="productDescriptions[${i.index}].isDefault" 
						value="true" cssClass="product-description-is-default-selector" 
						cssErrorClass="field-has-error" />
						<form:errors path="productDescriptions[${i.index}].isDefault" cssClass="field-error"/>
					</li>
				</ul>
				<ul class="title-value-pair">
					<li class="w100px">
						<form:label path="productDescriptions[${i.index}].name"><spring:message code="Name"/>:</form:label>
					</li>
					<li>
						<form:input path="productDescriptions[${i.index}].name" cssErrorClass="field-has-error"/>
						<form:errors path="productDescriptions[${i.index}].name" cssClass="field-error"/>
					</li>
				</ul>
				<div class="m10">
					<form:label path="productDescriptions[${i.index}].description"><spring:message code="Description"/>:</form:label>
					<form:errors path="productDescriptions[${i.index}].description" cssClass="field-error"/>
					<form:textarea path="productDescriptions[${i.index}].description" cssClass="ckeditor"/>
				</div>
        	</div>
    	</c:forEach>
    </div>
    <!-- 
	<div id="ecommerce-admin-product-description-tab-tools">
		<a href="#" id="language-add"><spring:message code="Add"/></a>
	</div>
	 -->
</div>

<script>
$(function(){
	$('#ecommerce-admin-product-description-tab').tabs({
		//tools: '#ecommerce-admin-product-description-tab-tools'
	});
	
	var $languageAddBtn = $('#language-add').linkbutton({
		iconCls: 'icon-add',
	    plain: true
	});
	
	$languageAddBtn.click(function(){
		if (!($languageAddBtn.linkbutton('options').disabled)) {
		
			$('#ecommerce-admin-product-description-dialog #select-language-cc').combobox({  
			    url:'combobox_data.json',  
			    valueField:'id',  
			    textField:'text'  
			}); 
			
		}
	});
	
	var $productDescriptionIsDefaultCheckBoxes = $('.product-description-is-default-selector');
	$productDescriptionIsDefaultCheckBoxes.change(function(){
		var $productDescriptionIsDefaultCheckBox = $(this);
		$productDescriptionIsDefaultCheckBoxes.prop('checked', false);
		$productDescriptionIsDefaultCheckBox.prop('checked', true);
	});
});
</script>


