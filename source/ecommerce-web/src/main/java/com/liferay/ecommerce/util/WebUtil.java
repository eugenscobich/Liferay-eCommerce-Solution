package com.liferay.ecommerce.util;

import javax.portlet.PortletRequest;

import com.liferay.ecommerce.model.Language;
import com.liferay.ecommerce.model.Store;
import com.liferay.ecommerce.service.system.Constant;

public class WebUtil {

	public static Store getAdminCurrentStore(PortletRequest request) {
		return (Store) request.getPortletSession().getAttribute(Constant.ADMIN_CURRENT_STORE_SESSION_ATTR);
	}

	public static void setAdminCurrentStore(PortletRequest request, Store store) {
		request.getPortletSession().setAttribute(Constant.ADMIN_CURRENT_STORE_SESSION_ATTR, store);
	}

	public static Language getLanguage(PortletRequest request) {
		request.getLocale().getLanguage();
		return null;
	}
}
