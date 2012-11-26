<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="portlet" uri="http://java.sun.com/portlet"%>
<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles"%>


<div class="admin-view-center">
	<form action='<portlet:actionURL name="select-store"/>' method="post" name="selectStoreForm">
		<ul class="title-value-pair">
			<li class="w100px">
				<label><spring:message code="Select-Store" />:</label>
			</li>
			<li>
				<select name="storeId">
					<c:forEach items="${stores}" var="store">
						<option value="${store.id}"
							<c:if test="${sessionScope.adminStore.id == store.id}">selected="true"</c:if>>${store.name}</option>
					</c:forEach>
				</select>
			</li>
		</ul>
		<ul class="title-value-pair">
			<li class="submit">
				<button type="submit"><spring:message code="Start" /></button>
			</li>
		</ul>
	</form>
</div>


