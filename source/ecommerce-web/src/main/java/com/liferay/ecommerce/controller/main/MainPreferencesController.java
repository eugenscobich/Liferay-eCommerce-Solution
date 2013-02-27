package com.liferay.ecommerce.controller.main;

import java.io.IOException;
import java.util.List;

import javax.portlet.ActionRequest;
import javax.portlet.ActionResponse;
import javax.portlet.PortletRequest;
import javax.portlet.ReadOnlyException;
import javax.portlet.RenderRequest;
import javax.portlet.RenderResponse;
import javax.portlet.ValidatorException;
import javax.validation.Valid;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.portlet.bind.annotation.ActionMapping;
import org.springframework.web.portlet.bind.annotation.RenderMapping;

import com.liferay.ecommerce.controller.BaseController;
import com.liferay.ecommerce.controller.catalogs.model.Preferences;
import com.liferay.ecommerce.model.Store;
import com.liferay.ecommerce.service.store.StoreService;
import com.liferay.ecommerce.util.WebUtil;

@Controller
@RequestMapping(value = "EDIT")
public class MainPreferencesController extends BaseController {

	private static Logger LOG = Logger.getLogger(MainPreferencesController.class);
	
	@Autowired
	private MessageSource messageSource;
	
	@Autowired
	private StoreService storeService;

	@ModelAttribute("stores")
	public List<Store> getStores(PortletRequest portletRequest) {
		return storeService.getAllStores();
	}
	
	@ModelAttribute("preferences")
	public Preferences getPreferences(PortletRequest portletRequest) {
		Preferences preferences = new Preferences();
		preferences.setStoreId(WebUtil.getPreferenceValue(portletRequest, "store-id", storeService.getDefaultStore().getId().toString(), Long.class));
		return preferences;
	}
	
	@RenderMapping
	public String view(RenderRequest request, RenderResponse response) {
		return "preferences";
	}
	
	@ActionMapping("save")
	public void save(ActionRequest request, ActionResponse response, Model model, @Valid @ModelAttribute Preferences preferences) throws ValidatorException, ReadOnlyException, IOException {
		WebUtil.setPreferenceValue(request, "store-id", preferences.getStoreId().toString());
	}
	
}
