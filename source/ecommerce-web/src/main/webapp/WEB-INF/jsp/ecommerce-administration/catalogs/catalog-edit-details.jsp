<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="portlet" uri="http://java.sun.com/portlet" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<div>
    <div id="ecommerce-admin-catalog-details-tab" >
   		<ul class="title-value-pair">
			<li class="w100px">
				<form:label path="catalogDetails.catalogStatus"><spring:message code="Catalog-status" />:</form:label>
			</li>
			<li>
				<form:select path="catalogDetails.catalogStatus" cssErrorClass="field-has-error">
					<spring:eval expression="T(com.liferay.ecommerce.model.type.CatalogStatus).values()" var="catalogStatusValues" />
					<c:forEach items="${catalogStatusValues}" var="catalogStatus">
						<form:option value="${catalogStatus}"><spring:message code="com.liferay.ecommerce.model.type.CatalogStatus.${catalogStatus}"/></form:option>
					</c:forEach>
				</form:select>
				<form:errors path="catalogDetails.catalogStatus" cssClass="field-error"/>
			</li>
		</ul>
		<ul class="title-value-pair">
			<li class="w100px">
				<form:label path="catalogDetails.sku"><spring:message code="Sku" />:</form:label>
			</li>
			<li>
				<form:input path="catalogDetails.sku" cssErrorClass="field-has-error"/>
				<form:errors path="catalogDetails.sku" cssClass="field-error"/>
			</li>
		</ul>
   		<ul class="title-value-pair">
			<li class="w100px">
				<form:label path="catalogDetails.catalogType"><spring:message code="Catalog-type" />:</form:label>
			</li>
			<li>
				<form:select path="catalogDetails.catalogType" cssErrorClass="field-has-error">
					<spring:eval expression="T(com.liferay.ecommerce.model.type.CatalogType).values()" var="catalogTypeValues" />
					<c:forEach items="${catalogTypeValues}" var="catalogType">
						<form:option value="${catalogType}"><spring:message code="com.liferay.ecommerce.model.type.CatalogType.${catalogType}"/></form:option>
					</c:forEach>
				</form:select>
				<form:errors path="catalogDetails.catalogType" cssClass="field-error"/>
			</li>
		</ul>
		<ul class="title-value-pair">
			<li class="w100px">
				<form:label path="catalogDetails.availableDate"><spring:message code="Available-date" />:</form:label>
			</li>
			<li>
				<form:input path="catalogDetails.availableDate" cssErrorClass="field-has-error" cssClass="easyui-datebox" />
				<form:errors path="catalogDetails.availableDate" cssClass="field-error"/>
			</li>
		</ul>
		<ul class="title-value-pair">
			<li class="w100px">
				<form:label path="catalogDetails.expiryDate"><spring:message code="Expiry-date" />:</form:label>
			</li>
			<li>
				<form:input path="catalogDetails.expiryDate" cssErrorClass="field-has-error" cssClass="easyui-datebox" />
				<form:errors path="catalogDetails.expiryDate" cssClass="field-error"/>
			</li>
		</ul>
		<ul class="title-value-pair">
			<li class="w100px">
				<form:label path="catalogDetails.invisible"><spring:message code="Invisible" />:</form:label>
			</li>
			<li>
				<form:checkbox path="catalogDetails.invisible" cssErrorClass="field-has-error" value="true"/>
				<form:errors path="catalogDetails.invisible" cssClass="field-error"/>
			</li>
		</ul>
		<ul class="title-value-pair">
			<li class="w100px">
				<form:label path="catalogDetails.manufacturer"><spring:message code="Manufacturer" />:</form:label>
			</li>
			<li>
				<form:select path="catalogDetails.manufacturer" cssErrorClass="field-has-error">
					<form:option value="0"><spring:message code="None" /></form:option>
					<form:options items="${manufacturers}" itemLabel="name"/>
				</form:select>
				<form:errors path="catalogDetails.manufacturer" cssClass="field-error"/>
			</li>
		</ul>
		<ul class="title-value-pair">
			<li class="w100px">
				<form:label path="catalogDetails.model"><spring:message code="Model" />:</form:label>
			</li>
			<li>
				<form:input path="catalogDetails.model" cssErrorClass="field-has-error"/>
				<form:errors path="catalogDetails.model" cssClass="field-error"/>
			</li>
		</ul>
		<ul class="title-value-pair">
			<li class="w100px">
				<form:label path="catalogDetails.quantity"><spring:message code="Quantity" />:</form:label>
			</li>
			<li>
				<form:input path="catalogDetails.quantity" cssErrorClass="field-has-error"/>
				<form:errors path="catalogDetails.quantity" cssClass="field-error"/>
			</li>
		</ul>
		<ul class="title-value-pair">
			<li class="w100px">
				<form:label path="catalogDetails.weight"><spring:message code="Weight" />:</form:label>
			</li>
			<li>
				<form:input path="catalogDetails.weight" cssErrorClass="field-has-error"/>
				<form:errors path="catalogDetails.weight" cssClass="field-error"/>
			</li>
		</ul>	
		<ul class="title-value-pair">
			<li class="w100px">
				<form:label path="catalogDetails.rating"><spring:message code="Rating" />:</form:label>
			</li>
			<li>
				<form:input path="catalogDetails.rating" cssErrorClass="field-has-error"/>
				<form:errors path="catalogDetails.rating" cssClass="field-error"/>
			</li>
		</ul>	
    </div>
</div>

<script>
$(function() {
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


