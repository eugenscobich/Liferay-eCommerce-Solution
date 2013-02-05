package com.liferay.ecommerce.util;

import java.util.Arrays;
import java.util.List;

import javax.portlet.PortletRequest;

import org.apache.commons.beanutils.ConvertUtils;
import org.apache.commons.lang3.ArrayUtils;

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

	public static List<Long> getIds(String idsStr) {
		long[] ids = (long[]) ConvertUtils.convert(idsStr.split(","), long[].class);
		List<Long> longs = Arrays.asList(ArrayUtils.toObject(ids));
		return longs;
	}
	
	public static Store getCurrentStore(PortletRequest request) {
		return (Store) request.getPortletSession().getAttribute(Constant.CURRENT_STORE_SESSION_ATTR);
	}

	public static void setCurrentStore(PortletRequest request, Store store) {
		request.getPortletSession().setAttribute(Constant.CURRENT_STORE_SESSION_ATTR, store);
	}
	
}
