package com.liferay.ecommerce.controller.portlet.administration;

import javax.portlet.ActionRequest;
import javax.portlet.ActionResponse;
import javax.portlet.RenderRequest;
import javax.portlet.RenderResponse;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.portlet.bind.annotation.ActionMapping;
import org.springframework.web.portlet.bind.annotation.RenderMapping;

import com.liferay.ecommerce.util.WebUtil;

@Controller
@RequestMapping(value = "VIEW")
public class AdministrationController extends BaseAdminController {

	private static Logger LOG = Logger.getLogger(AdministrationController.class);

	@Autowired
	private MessageSource messageSource;

	@RenderMapping
	public String view(RenderRequest request, RenderResponse response, Model model) {
		model.addAttribute("stores", storeService.getAll());
		return "admin-view";
	}

	@ActionMapping("select-store")
	public void selectStore(ActionRequest request, ActionResponse response, @RequestParam("storeId") Long storeId) {
		WebUtil.setAdminCurrentStore(request, storeService.get(storeId));
		LOG.info(storeId);
		response.setRenderParameter("view", "store-view");
	}
}
