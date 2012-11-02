package com.liferay.ecommerce.controller.portlet.main;

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
public class MainController extends BaseController {

	// private static Logger LOG = Logger.getLogger(MainController.class);
	
	@Autowired
	private MessageSource messageSource;
	
	@Autowired
	private StoreService storeService;
	
	@RenderMapping
	public String view(RenderRequest request, RenderResponse response) {
		request.setAttribute("message", "Eugen");
		return "view";
	}



}
