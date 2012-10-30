package com.liferay.ecommerce.controller.portlet;

import javax.portlet.ActionRequest;
import javax.portlet.ActionResponse;

import org.apache.log4j.Logger;
import org.springframework.web.portlet.bind.annotation.ActionMapping;

public class BaseController {
	
	private static Logger LOG = Logger.getLogger(BaseController.class);
	
	@ActionMapping
	public void defaultAction(ActionRequest request, ActionResponse response) {
		LOG.warn("Call default action method");
	}

}
