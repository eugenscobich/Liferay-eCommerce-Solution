package com.liferay.ecommerce.controller.portlet.administration;

import javax.portlet.RenderRequest;
import javax.portlet.RenderResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.portlet.bind.annotation.RenderMapping;

import com.liferay.ecommerce.controller.portlet.BaseController;
import com.liferay.ecommerce.service.store.StoreService;

@Controller
@RequestMapping(value = "VIEW")
public class ConfigurationController extends BaseController {

	// private static Logger LOG =
	// Logger.getLogger(ConfigurationController.class);

	@Autowired
	private MessageSource messageSource;

	@Autowired
	private StoreService storeService;

	@RenderMapping(params = "view=configuration-view")
	public String view(RenderRequest request, RenderResponse response) {
		request.setAttribute("message", "Configuration");
		return "configuration-view";
	}

}
