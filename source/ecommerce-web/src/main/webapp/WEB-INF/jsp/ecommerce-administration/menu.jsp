<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="portlet" uri="http://java.sun.com/portlet"%>

<div class="ecommerce-admin-menu">

	<div class="easyui-accordion">
		<div title="<spring:message code="Store"/>"
			data-options="iconCls:'icon-ok'"
			style="overflow: auto; padding: 10px;" <c:if test="${selectedAccordion == 0}">selected="true"</c:if>>
			<ul>
				<li><portlet:renderURL var="StoreView">
						<portlet:param name="view" value="store-view" />
					</portlet:renderURL> <a href="${StoreView}"><spring:message code="Store" /></a></li>
			</ul>
		</div>
		<div title="<spring:message code="Configuration"/>"
			data-options="iconCls:'icon-help'" style="padding: 10px;" <c:if test="${selectedAccordion == 1}">selected="true"</c:if>>
			<ul>
				<li><portlet:renderURL var="ConfigurationView">
						<portlet:param name="view" value="configuration-view" />
					</portlet:renderURL> <a href="${ConfigurationView}"><spring:message
							code="Configuration" /></a></li>
			</ul>
		</div>
		<div title="<spring:message code="Products"/>"
			data-options="iconCls:'icon-search'" style="padding: 10px;" <c:if test="${selectedAccordion == 2}">selected="true"</c:if>>
			<ul>
				<li><portlet:renderURL var="ProductsView">
						<portlet:param name="view" value="products-view" />
					</portlet:renderURL> <a href="${ProductsView}"><spring:message code="Products" /></a></li>
			</ul>
		</div>
	</div>

</div>

<script>
	$(function() {/*
		var $accordion = $('#easyui-accordion').accordion({  
		    animate: true
		});
		$accordion.accordion('select', ${selectedAccordion});*/
	});
</script>



