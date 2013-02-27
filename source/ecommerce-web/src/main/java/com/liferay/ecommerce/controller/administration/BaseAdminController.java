package com.liferay.ecommerce.controller.administration;

import javax.portlet.PortletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ModelAttribute;

import com.liferay.ecommerce.admin.service.store.StoreService;
import com.liferay.ecommerce.controller.BaseController;
import com.liferay.ecommerce.model.Store;
import com.liferay.ecommerce.util.WebUtil;

public class BaseAdminController extends BaseController {
	//private static Logger LOG = Logger.getLogger(BaseAdminController.class);

	@Autowired
	protected StoreService storeService;

	@ModelAttribute("currentStore")
	public Store getCurrentStore(PortletRequest request) {
		Store store = WebUtil.getAdminCurrentStore(request);
		if (store == null) {
			return storeService.getDefaultStore();
		}
		return store;
	}
}
