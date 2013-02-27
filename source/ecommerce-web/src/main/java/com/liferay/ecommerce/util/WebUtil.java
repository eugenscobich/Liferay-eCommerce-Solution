package com.liferay.ecommerce.util;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;

import javax.portlet.PortletPreferences;
import javax.portlet.PortletRequest;
import javax.portlet.ReadOnlyException;
import javax.portlet.ValidatorException;

import org.apache.commons.beanutils.ConvertUtils;
import org.apache.commons.lang3.ArrayUtils;

import com.liferay.ecommerce.admin.service.system.Constant;
import com.liferay.ecommerce.model.Language;
import com.liferay.ecommerce.model.Store;

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

	@SuppressWarnings("unchecked")
	public static <T> T getPreferenceValue(PortletRequest portletRequest, String key, String defaultValue, Class<T> clazz) {
		PortletPreferences preferences = portletRequest.getPreferences();
		String value = preferences.getValue(key, defaultValue);
		if (String.class.equals(clazz)) {
			return (T) value;
		} else if (Long.class.equals(clazz)) {
			return (T) Long.valueOf(value);
		}
		return null;
	}

	public static void setPreferenceValue(PortletRequest portletRequest, String key, String value) throws ValidatorException, IOException, ReadOnlyException {
		PortletPreferences preferences = portletRequest.getPreferences();
		preferences.setValue(key, value);
		preferences.store();
	}
	
}
