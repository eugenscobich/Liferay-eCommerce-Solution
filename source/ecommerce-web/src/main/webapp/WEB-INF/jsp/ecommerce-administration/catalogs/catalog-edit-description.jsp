<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="portlet" uri="http://java.sun.com/portlet" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<div>
    <div id="ecommerce-admin-catalog-description-tab" >  
    	<c:forEach items="${catalog.catalogDescriptions}" var="catalogDescription" varStatus="i">
    		
    		<c:set var="catalogDescriptionTabIconCls" value='iconCls="icon-pencil"' />
			<spring:bind path="catalogDescriptions[${i.index}].*">
				<c:if test="${status.error}">
					<c:set var="catalogDescriptionTabIconCls" value='iconCls="icon-no"' /> 
				</c:if>
			</spring:bind>
   	
    		<div title='<spring:message code="language.${catalogDescription.language.code}" />' ${catalogDescriptionTabIconCls}>
	    		<ul class="title-value-pair">
					<li class="w100px">
						<form:label path="catalogDescriptions[${i.index}].isDefault" for="catalogDescriptions${i.index}.isDefault1"><spring:message code="Default" />:</form:label>
					</li>
					<li>
						<form:checkbox path="catalogDescriptions[${i.index}].isDefault" 
						value="true" cssClass="catalog-description-is-default-selector" 
						cssErrorClass="field-has-error" />
						<form:errors path="catalogDescriptions[${i.index}].isDefault" cssClass="field-error"/>
					</li>
				</ul>
				<ul class="title-value-pair">
					<li class="w100px">
						<form:label path="catalogDescriptions[${i.index}].name"><spring:message code="Name"/>:</form:label>
					</li>
					<li>
						<form:input path="catalogDescriptions[${i.index}].name" cssErrorClass="field-has-error"/>
						<form:errors path="catalogDescriptions[${i.index}].name" cssClass="field-error"/>
					</li>
				</ul>
				<div class="m10">
					<form:label path="catalogDescriptions[${i.index}].description"><spring:message code="Description"/>:</form:label>
					<form:errors path="catalogDescriptions[${i.index}].description" cssClass="field-error"/>
					<form:textarea path="catalogDescriptions[${i.index}].description" cssClass="ckeditor"/>
				</div>
        	</div>
    	</c:forEach>
    </div>
    <!-- 
	<div id="ecommerce-admin-catalog-description-tab-tools">
		<a href="#" id="language-add"><spring:message code="Add"/></a>
	</div>
	 -->
</div>

<script>
$(function(){
	$('#ecommerce-admin-catalog-description-tab').tabs({
		//tools: '#ecommerce-admin-catalog-description-tab-tools'
	});
	
	var $languageAddBtn = $('#language-add').linkbutton({
		iconCls: 'icon-add',
	    plain: true
	});
	
	$languageAddBtn.click(function(){
		if (!($languageAddBtn.linkbutton('options').disabled)) {
		
			$('#ecommerce-admin-catalog-description-dialog #select-language-cc').combobox({  
			    url:'combobox_data.json',  
			    valueField:'id',  
			    textField:'text'  
			}); 
			
		}
	});
	
	var $catalogDescriptionIsDefaultCheckBoxes = $('.catalog-description-is-default-selector');
	$catalogDescriptionIsDefaultCheckBoxes.change(function(){
		var $catalogDescriptionIsDefaultCheckBox = $(this);
		$catalogDescriptionIsDefaultCheckBoxes.prop('checked', false);
		$catalogDescriptionIsDefaultCheckBox.prop('checked', true);
	});
});
</script>


