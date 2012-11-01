<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="portlet" uri="http://java.sun.com/portlet"%>

<div class="ecommerce-admin-menu">
	<div id="accordion">
		<h3><spring:message code="Store"/></h3>
		<div>
			<ul>
				<li>
					<portlet:renderURL var="StoreView">
						<portlet:param name="view" value="store-view"/>
					</portlet:renderURL>
					<a href="${StoreView}"><spring:message code="Store"/></a>
				</li>
			</ul>
		</div>
		<h3><spring:message code="Configuration"/></h3>
		<div>
			<ul>
				<li>
					<portlet:renderURL var="ConfigurationView">
						<portlet:param name="view" value="configuration"/>
					</portlet:renderURL>
					<a href="${ConfigurationView}"><spring:message code="Configuration"/></a>
				</li>
			</ul>
		</div>
		<h3><spring:message code="Products"/></h3>
		<div>
			<ul>
				<li>
					<portlet:renderURL var="ProductsView">
						<portlet:param name="view" value="products-view"/>
					</portlet:renderURL>
					<a href="${ProductsView}"><spring:message code="Products"/></a>
				</li>
			</ul>
		</div>
	</div>
</div>

<script>
	$(function() {
		$("#accordion").accordion({
			heightStyle: "content",
			active: ${menuIndex}
		});
	});
</script>



