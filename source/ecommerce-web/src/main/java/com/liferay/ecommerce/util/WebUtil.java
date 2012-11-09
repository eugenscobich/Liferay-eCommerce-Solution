package com.liferay.ecommerce.util;

import javax.portlet.PortletRequest;
import javax.portlet.PortletSession;

import com.liferay.ecommerce.model.Store;
import com.liferay.ecommerce.service.system.Constant;

public class WebUtil {

	public static Store getAdminCurrentStore(PortletRequest request) {
		return (Store) request.getPortletSession().getAttribute(Constant.ADMIN_CURRENT_STORE_SESSION_ATTR, PortletSession.APPLICATION_SCOPE);
	}

	public static void setAdminCurrentStore(PortletRequest request, Store store) {
		request.getPortletSession().setAttribute(Constant.ADMIN_CURRENT_STORE_SESSION_ATTR, store, PortletSession.APPLICATION_SCOPE);
	}

}
