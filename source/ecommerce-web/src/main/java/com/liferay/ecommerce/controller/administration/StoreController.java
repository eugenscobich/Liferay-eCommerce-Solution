package com.liferay.ecommerce.controller.administration;

import javax.portlet.RenderRequest;
import javax.portlet.RenderResponse;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.portlet.bind.annotation.RenderMapping;

import com.liferay.ecommerce.admin.service.store.StoreService;

@Controller
@RequestMapping(value = "VIEW")
public class StoreController extends BaseAdminController {

	private static Logger LOG = Logger.getLogger(StoreController.class);

	@Autowired
	private MessageSource messageSource;

	@Autowired
	private StoreService storeService;

	@RenderMapping(params = "view=store-view")
	public String view(RenderRequest request, RenderResponse response) {
		return "store-view";
	}

	@RenderMapping(params = "view=store-managment-view")
	public String storeManagmentView(RenderRequest request, RenderResponse response) {
		return "store-managment-view";
	}
}
