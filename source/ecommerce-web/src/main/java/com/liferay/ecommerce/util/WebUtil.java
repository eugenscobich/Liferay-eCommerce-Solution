package com.liferay.ecommerce.util;

import javax.portlet.PortletRequest;
import javax.portlet.ResourceRequest;

import net.sf.json.JSONSerializer;

import com.liferay.ecommerce.model.Store;
import com.liferay.ecommerce.service.system.Constant;

public class WebUtil {

	public static Store getAdminCurrentStore(ResourceRequest request) {
		return (Store) request.getAttribute(Constant.ADMIN_CURRENT_STORE_SESSION_ATTR);
	}

	public static String returnJSON(PortletRequest request, Object obj) {
		request.setAttribute("json", JSONSerializer.toJSON(obj).toString());
		return "json-response";
	}
}
