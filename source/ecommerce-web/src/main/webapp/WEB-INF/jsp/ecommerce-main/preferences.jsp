<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="portlet" uri="http://java.sun.com/portlet" %>
<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>

<portlet:actionURL var="saveAction" name="save"/>

<div class="ecommerce-main">
	<form:form action="${saveAction}" method="post" modelAttribute="preferences">
		<ul class="title-value-pair">
			<li class="w100px">
				<form:label path="storeId"><spring:message code="Status" />:</form:label>
			</li>
			<li>
				<form:select path="storeId" cssErrorClass="field-has-error">
					<form:option value="0"><spring:message code="None"/></form:option>
					<form:options items="${stores}" itemLabel="name" itemValue="id"/>
				</form:select>
				<form:errors path="storeId" cssClass="field-error"/>
			</li>
		</ul>
		<form:button value='<spring:message code="Save"/>'/>
	</form:form> 
	
</div>

