package com.liferay.ecommerce.controller.portlet.administration;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ModelAttribute;

import com.liferay.ecommerce.controller.portlet.BaseController;
import com.liferay.ecommerce.model.Store;
import com.liferay.ecommerce.service.store.StoreService;

public class BaseAdminController extends BaseController {

	@Autowired
	protected StoreService storeService;

	@ModelAttribute("stores")
	public List<Store> getStores() {
		return storeService.getAll();
	}
}
