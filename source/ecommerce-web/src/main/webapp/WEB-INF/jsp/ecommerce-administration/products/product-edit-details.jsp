<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="portlet" uri="http://java.sun.com/portlet" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<div>
    <div id="ecommerce-admin-product-details-tab" >  
   		<ul class="title-value-pair">
			<li class="w100px">
				<form:label path="productDetails.productStatus"><spring:message code="Product-status" />:</form:label>
			</li>
			<li>
				<form:select path="productDetails.productStatus" cssErrorClass="field-has-error">
					<spring:eval expression="T(com.liferay.ecommerce.model.type.ProductStatus).values()" var="productStatusValues" />
					<c:forEach items="${productStatusValues}" var="productStatus">
						<form:option value="${productStatus}"><spring:message code="com.liferay.ecommerce.model.type.ProductStatus.${productStatus}"/></form:option>
					</c:forEach>
				</form:select>
				<form:errors path="productDetails.productStatus" cssClass="field-error"/>
			</li>
		</ul>
		<ul class="title-value-pair">
			<li class="w100px">
				<form:label path="productDetails.sku"><spring:message code="Sku" />:</form:label>
			</li>
			<li>
				<form:input path="productDetails.sku" cssErrorClass="field-has-error"/>
				<form:errors path="productDetails.sku" cssClass="field-error"/>
			</li>
		</ul>
   		<ul class="title-value-pair">
			<li class="w100px">
				<form:label path="productDetails.productType"><spring:message code="Product-type" />:</form:label>
			</li>
			<li>
				<form:select path="productDetails.productType" cssErrorClass="field-has-error">
					<spring:eval expression="T(com.liferay.ecommerce.model.type.ProductType).values()" var="productTypeValues" />
					<c:forEach items="${productTypeValues}" var="productType">
						<form:option value="${productType}"><spring:message code="com.liferay.ecommerce.model.type.ProductType.${productType}"/></form:option>
					</c:forEach>
				</form:select>
				<form:errors path="productDetails.productType" cssClass="field-error"/>
			</li>
		</ul>
		<ul class="title-value-pair">
			<li class="w100px">
				<form:label path="productDetails.availableDate"><spring:message code="Available-date" />:</form:label>
			</li>
			<li>
				<form:input path="productDetails.availableDate" cssErrorClass="field-has-error" cssClass="easyui-datebox" />
				<form:errors path="productDetails.availableDate" cssClass="field-error"/>
			</li>
		</ul>
		<ul class="title-value-pair">
			<li class="w100px">
				<form:label path="productDetails.expiryDate"><spring:message code="Expiry-date" />:</form:label>
			</li>
			<li>
				<form:input path="productDetails.expiryDate" cssErrorClass="field-has-error" cssClass="easyui-datebox" />
				<form:errors path="productDetails.expiryDate" cssClass="field-error"/>
			</li>
		</ul>
		<ul class="title-value-pair">
			<li class="w100px">
				<form:label path="productDetails.invisible"><spring:message code="Invisible" />:</form:label>
			</li>
			<li>
				<form:checkbox path="productDetails.invisible" cssErrorClass="field-has-error" value="true"/>
				<form:errors path="productDetails.invisible" cssClass="field-error"/>
			</li>
		</ul>
		<ul class="title-value-pair">
			<li class="w100px">
				<form:label path="productDetails.manufacturer"><spring:message code="Manufacturer" />:</form:label>
			</li>
			<li>
				<form:select path="productDetails.manufacturer" cssErrorClass="field-has-error">
					<form:option value="0"><spring:message code="None" /></form:option>
					<form:options items="${manufacturers}" itemLabel="name"/>
				</form:select>
				<form:errors path="productDetails.manufacturer" cssClass="field-error"/>
			</li>
		</ul>
		<ul class="title-value-pair">
			<li class="w100px">
				<form:label path="productDetails.model"><spring:message code="Model" />:</form:label>
			</li>
			<li>
				<form:input path="productDetails.model" cssErrorClass="field-has-error"/>
				<form:errors path="productDetails.model" cssClass="field-error"/>
			</li>
		</ul>
		<ul class="title-value-pair">
			<li class="w100px">
				<form:label path="productDetails.quantity"><spring:message code="Quantity" />:</form:label>
			</li>
			<li>
				<form:input path="productDetails.quantity" cssErrorClass="field-has-error"/>
				<form:errors path="productDetails.quantity" cssClass="field-error"/>
			</li>
		</ul>
		<ul class="title-value-pair">
			<li class="w100px">
				<form:label path="productDetails.weight"><spring:message code="Weight" />:</form:label>
			</li>
			<li>
				<form:input path="productDetails.weight" cssErrorClass="field-has-error"/>
				<form:errors path="productDetails.weight" cssClass="field-error"/>
			</li>
		</ul>	
		<ul class="title-value-pair">
			<li class="w100px">
				<form:label path="productDetails.rating"><spring:message code="Rating" />:</form:label>
			</li>
			<li>
				<form:input path="productDetails.rating" cssErrorClass="field-has-error"/>
				<form:errors path="productDetails.rating" cssClass="field-error"/>
			</li>
		</ul>	
    </div>
</div>

<script>
$(function() {
      
});
</script>


