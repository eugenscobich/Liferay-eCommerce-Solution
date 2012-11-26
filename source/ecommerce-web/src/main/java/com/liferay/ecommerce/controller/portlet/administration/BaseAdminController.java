package com.liferay.ecommerce.controller.portlet.administration;

import java.util.List;

import javax.portlet.PortletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ModelAttribute;

import com.liferay.ecommerce.controller.portlet.BaseController;
import com.liferay.ecommerce.model.Store;
import com.liferay.ecommerce.service.store.StoreService;
import com.liferay.ecommerce.util.WebUtil;

public class BaseAdminController extends BaseController {

	@Autowired
	protected StoreService storeService;

	@ModelAttribute("stores")
	public List<Store> getStores() {
		return storeService.getAll();
	}

	@ModelAttribute("currentStore")
	public Store getCurrentStore(PortletRequest request) {
		Store store = WebUtil.getAdminCurrentStore(request);
		if (store == null) {
			return storeService.getDefaultStore();
		}
		return store;
	}
}
