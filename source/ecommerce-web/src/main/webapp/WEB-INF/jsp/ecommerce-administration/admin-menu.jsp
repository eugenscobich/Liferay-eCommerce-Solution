<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="portlet" uri="http://java.sun.com/portlet"%>
<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles"%>

<c:set var="accordionIndex" value='${fn:split(menuIndex, ".")[0]}'/>
<div class="easyui-accordion">
	<div title="<spring:message code="Store"/>"
		data-options="iconCls:'icon-ok'" <c:if test="${accordionIndex == 1}">selected="true"</c:if>>
		<ul>
			<li <c:if test="${menuIndex == 1.1}">class="admin-menu-selected"</c:if>>
				<portlet:renderURL var="StoreView">
					<portlet:param name="view" value="store-view" />
				</portlet:renderURL>
				<a href="${StoreView}" ><spring:message code="Store" /></a>
			</li>
			<li <c:if test="${menuIndex == 1.2}">class="admin-menu-selected"</c:if>>
				<portlet:renderURL var="StoreManagmentView">
					<portlet:param name="view" value="store-managment-view" />
				</portlet:renderURL>
				<a href="${StoreManagmentView}" ><spring:message code="Store-Managment" /></a>
			</li>
		</ul>
	</div>
	<div title="<spring:message code="Configuration"/>"
		data-options="iconCls:'icon-help'" <c:if test="${accordionIndex == 2}">selected="true"</c:if>>
		<ul>
			<li <c:if test="${menuIndex == 2.1}">class="admin-menu-selected"</c:if>>
				<portlet:renderURL var="ConfigurationView">
					<portlet:param name="view" value="configuration-view" />
				</portlet:renderURL> 
				<a href="${ConfigurationView}" ><spring:message code="Configuration" /></a>
			</li>
		</ul>
	</div>
	<div title="<spring:message code="Products"/>"
		data-options="iconCls:'icon-search'" <c:if test="${accordionIndex == 3}">selected="true"</c:if>>
		<ul>
			<li <c:if test="${menuIndex == 3.1}">class="admin-menu-selected"</c:if>>
				<portlet:renderURL var="ProductsView">
					<portlet:param name="view" value="products-view" />
				</portlet:renderURL> 
				<a href="${ProductsView}" ><spring:message code="Products" /></a>
			</li>
		</ul>
	</div>
</div>



