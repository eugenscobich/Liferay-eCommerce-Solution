package com.liferay.ecommerce.controller.portlet.main;

import javax.portlet.RenderRequest;
import javax.portlet.RenderResponse;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.portlet.bind.annotation.RenderMapping;

import com.liferay.ecommerce.controller.portlet.BaseController;
import com.liferay.ecommerce.service.Test;

@Controller
@RequestMapping(value = "view")
public class MainController extends BaseController {

	private static Logger LOG = Logger.getLogger(MainController.class);
	
	@Autowired
	private MessageSource messageSource;

	@Autowired
	private Test test;
	
	@RenderMapping
	public String view(RenderRequest render, RenderResponse response) {
		String aaa= messageSource.getMessage("eugen", null, null, null);
		LOG.info("Call render view " + aaa + test);
		return "view";
	}

}
