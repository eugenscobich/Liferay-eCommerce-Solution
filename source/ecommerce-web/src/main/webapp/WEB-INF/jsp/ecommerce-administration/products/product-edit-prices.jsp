<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="portlet" uri="http://java.sun.com/portlet" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<div>
    <div id="ecommerce-admin-product-prices-tab" >  
    	<c:forEach items="${product.prices}" var="price" varStatus="i">
    		<c:set var="productPricesTabIconCls" value='iconCls="icon-pencil"' />
			<spring:bind path="price[${i.index}].*">
				<c:if test="${status.error}">
					<c:set var="productPricesTabIconCls" value='iconCls="icon-no"' /> 
				</c:if>
			</spring:bind>
   	
    		<div title='<c:out value="${price.currency.code}"/>' ${productPricesTabIconCls}>
	    		<ul class="title-value-pair">
					<li>
						<form:label path="prices[${i.index}].isDefault" for="prices${i.index}.isDefault1"><spring:message code="Default" />:</form:label>
					</li>
					<li>
						<form:checkbox path="prices[${i.index}].isDefault" 
						value="true" cssClass="product-prices-is-default-selector" 
						cssErrorClass="field-has-error" />
						<form:errors path="prices[${i.index}].isDefault" cssClass="field-error"/>
					</li>
				</ul>
				<ul class="title-value-pair">
					<li>
						<form:label path="prices[${i.index}].price"><spring:message code="Price"/>:</form:label>
					</li>
					<li>
						<form:input path="prices[${i.index}].price" cssErrorClass="field-has-error"/>
						<form:errors path="prices[${i.index}].price" cssClass="field-error"/>
					</li>
				</ul>
				<ul class="title-value-pair">
					<li>
						<form:label path="prices[${i.index}].isEnabledSpecialPrice"><spring:message code="Enable-special-price"/>:</form:label>
					</li>
					<li>
						<form:checkbox path="prices[${i.index}].isEnabledSpecialPrice" 
							value="true" cssClass="product-prices-enable-special-selector-${i.index}" 
							cssErrorClass="field-has-error" />
						<form:errors path="prices[${i.index}].isEnabledSpecialPrice" cssClass="field-error"/>
					</li>
				</ul>
				<ul class="title-value-pair">
					<li>
						<form:label path="prices[${i.index}].specialPrice"><spring:message code="Special-price"/>:</form:label>
					</li>
					<li>
						<form:input path="prices[${i.index}].specialPrice" cssErrorClass="field-has-error" cssClass="product-prices-enable-special-inputs-${i.index}"/>
						<form:errors path="prices[${i.index}].specialPrice" cssClass="field-error"/>
					</li>
				</ul>
				<ul class="title-value-pair">
					<li>
						<form:label path="prices[${i.index}].startDate"><spring:message code="Start-date"/>:</form:label>
					</li>
					<li>
						<form:input path="prices[${i.index}].startDate" cssErrorClass="field-has-error" cssClass="product-prices-enable-special-inputs-${i.index} easyui-datebox"/>
						<form:errors path="prices[${i.index}].startDate" cssClass="field-error"/>
					</li>
				</ul>
				<ul class="title-value-pair">
					<li>
						<form:label path="prices[${i.index}].endDate"><spring:message code="End-date"/>:</form:label>
					</li>
					<li>
						<form:input path="prices[${i.index}].endDate" cssErrorClass="field-has-error" cssClass="product-prices-enable-special-inputs-${i.index} easyui-datebox"/>
						<form:errors path="prices[${i.index}].endDate" cssClass="field-error"/>
					</li>
				</ul>
        	</div>
        	
        	<script>
			$(function(){
				var $productPricesIsEnableSpecialPriceCheckBox = $('.product-prices-enable-special-selector-${i.index}');
				$productPricesIsEnableSpecialPriceCheckBox.change(function(){
					var $productPricesIsEnableSpecialPriceInputs = $('.product-prices-enable-special-inputs-${i.index}');
					if($productPricesIsEnableSpecialPriceCheckBox.attr('checked')) {
						$productPricesIsEnableSpecialPriceInputs.removeAttr('disabled');
					} else {
						$productPricesIsEnableSpecialPriceInputs.attr('disabled', 'disabled');
					}
				});
				$productPricesIsEnableSpecialPriceCheckBox.change();
			});
			</script>
    	</c:forEach>
    </div>
</div>

<script>
$(function(){
	$('#ecommerce-admin-product-prices-tab').tabs({});
	
	var $productPricesIsDefaultCheckBoxes = $('.product-prices-is-default-selector');
	$productPricesIsDefaultCheckBoxes.change(function(){
		var $productPricesIsDefaultCheckBox = $(this);
		$productPricesIsDefaultCheckBoxes.prop('checked', false);
		$productPricesIsDefaultCheckBox.prop('checked', true);
	});
	
	$(".easyui-datebox").datebox({
		formatter: function(date){
			var y = date.getFullYear();
			y = (y + "").length == 1 ? ("0" + y) : y;
			var m = date.getMonth()+1;
			m = (m + "").length == 1 ? ("0" + m) : m;
			var d = date.getDate();
			d = (d + "").length == 1 ? ("0" + d) : d;
			console.log(m+'/'+d+'/'+y);
			return m+'/'+d+'/'+y;
		},
		editable: false
	});
});
</script>


