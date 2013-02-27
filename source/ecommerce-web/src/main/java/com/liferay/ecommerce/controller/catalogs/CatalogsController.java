package com.liferay.ecommerce.controller.catalogs;

import java.util.List;

import javax.portlet.PortletRequest;
import javax.portlet.RenderRequest;
import javax.portlet.RenderResponse;
import javax.portlet.ResourceRequest;
import javax.portlet.ResourceResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.portlet.bind.annotation.RenderMapping;
import org.springframework.web.portlet.bind.annotation.ResourceMapping;

import com.liferay.ecommerce.admin.service.language.LanguageService;
import com.liferay.ecommerce.controller.BaseController;
import com.liferay.ecommerce.model.Catalog;
import com.liferay.ecommerce.model.Language;
import com.liferay.ecommerce.model.Store;
import com.liferay.ecommerce.service.catalog.CatalogService;
import com.liferay.ecommerce.service.store.StoreService;
import com.liferay.ecommerce.util.WebUtil;

@Controller
@RequestMapping(value = "VIEW")
public class CatalogsController extends BaseController {

	// private static Logger LOG = Logger.getLogger(MainController.class);
	
	@Autowired
	private MessageSource messageSource;
	
	@Autowired
	private StoreService storeService;
	
	@Autowired
	private CatalogService catalogService;
	
	@Autowired
	private LanguageService languageService;
	
	
	@ModelAttribute("currentStore")
	public Store getCurrentStore(PortletRequest request) {
		Store store = WebUtil.getCurrentStore(request);
		if (store == null) {
			store = storeService.getDefaultStore();
			WebUtil.setCurrentStore(request, store);
			return store;
		}
		return store;
	}
	
	@RenderMapping
	public String view(RenderRequest request, RenderResponse response) {
		return "view";
	}
	
	@ResourceMapping("getAllActiveCatalogs")
	@ResponseBody
	public List<Catalog> getAllActiveCatalogs(ResourceRequest request, ResourceResponse resourceResponse) {
		Store store = WebUtil.getCurrentStore(request);
		Language language = languageService.getLanguageByCode(store, request.getLocale().getLanguage());
		List<Catalog> catalogs = catalogService.getAllActiveCatalogs(store, language);
		return catalogs;
	}
}
