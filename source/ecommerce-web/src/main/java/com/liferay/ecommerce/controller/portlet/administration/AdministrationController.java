package com.liferay.ecommerce.controller.portlet.administration;

import java.util.List;

import javax.portlet.ActionRequest;
import javax.portlet.ActionResponse;
import javax.portlet.PortletSession;
import javax.portlet.RenderRequest;
import javax.portlet.RenderResponse;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.portlet.bind.annotation.ActionMapping;
import org.springframework.web.portlet.bind.annotation.RenderMapping;

import com.liferay.ecommerce.controller.portlet.BaseController;
import com.liferay.ecommerce.model.Store;
import com.liferay.ecommerce.service.store.StoreService;
import com.liferay.ecommerce.service.system.Constant;

@Controller
@RequestMapping(value = "VIEW")
public class AdministrationController extends BaseController {

	private static Logger LOG = Logger.getLogger(AdministrationController.class);

	@Autowired
	private MessageSource messageSource;

	@Autowired
	private StoreService storeService;

	@ModelAttribute("stores")
	public List<Store> getStores() {
		return storeService.getAll();
	}

	@RenderMapping
	public String view(RenderRequest request, RenderResponse response) {
		request.setAttribute("message", "Admin");
		return "admin-view";
	}

	@ActionMapping("select-store")
	public void selectStore(ActionRequest request, ActionResponse response, @RequestParam("storeId") Long storeId) {
		request.getPortletSession().setAttribute(Constant.ADMIN_CURRENT_STORE_SESSION_ATTR, storeService.get(storeId), PortletSession.APPLICATION_SCOPE);
		LOG.warn(storeId);
	}
}
