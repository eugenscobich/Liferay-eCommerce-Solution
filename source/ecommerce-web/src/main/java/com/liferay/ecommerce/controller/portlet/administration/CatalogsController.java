package com.liferay.ecommerce.controller.portlet.administration;

import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.portlet.ActionRequest;
import javax.portlet.ActionResponse;
import javax.portlet.PortletRequest;
import javax.portlet.RenderRequest;
import javax.portlet.RenderResponse;
import javax.portlet.ResourceRequest;
import javax.portlet.ResourceResponse;
import javax.validation.Valid;

import org.jboss.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.context.MessageSource;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.portlet.bind.annotation.ActionMapping;
import org.springframework.web.portlet.bind.annotation.RenderMapping;
import org.springframework.web.portlet.bind.annotation.ResourceMapping;

import com.liferay.ecommerce.model.Catalog;
import com.liferay.ecommerce.model.Language;
import com.liferay.ecommerce.model.Manufacturer;
import com.liferay.ecommerce.model.Store;
import com.liferay.ecommerce.service.catalog.CatalogService;
import com.liferay.ecommerce.service.language.LanguageService;
import com.liferay.ecommerce.service.manufacturer.ManufacturerService;
import com.liferay.ecommerce.service.store.StoreService;
import com.liferay.ecommerce.util.JsonUtil;
import com.liferay.ecommerce.util.WebUtil;
import com.liferay.ecommerce.util.bind.CustomManufacturerPropertyEditor;
import com.liferay.ecommerce.util.formater.DateFormaterUtil;

@Controller
@RequestMapping(value = "VIEW")
public class CatalogsController extends BaseAdminController {

	private static Logger LOG = Logger.getLogger(CatalogsController.class);

	@Autowired
	private MessageSource messageSource;

	@Autowired
	private StoreService storeService;

	@Autowired
	private CatalogService catalogService;

	@Autowired
	private LanguageService languageService;

	@Autowired
	private CustomManufacturerPropertyEditor customManufacturerPropertyEditor;

	@Autowired
	private ManufacturerService manufacturerService;

	@InitBinder
	public void initBinder(WebDataBinder binder) {
		CustomDateEditor customDateEditor = new CustomDateEditor(DateFormaterUtil.getDateFormatForWeb(), true,
				DateFormaterUtil.WEB_FORMAT.length());
		binder.registerCustomEditor(Date.class, customDateEditor);
		binder.registerCustomEditor(Manufacturer.class, customManufacturerPropertyEditor);

	}

	@ModelAttribute("catalog")
	public Catalog getNewCatalog(PortletRequest request, @RequestParam(required = false) Long catalogId) {
		if (("save-catalog".equals(request.getParameter("javax.portlet.action")) || "edit-catalog".equals(request
				.getParameter("javax.portlet.action"))) && catalogId != null) {
			Catalog catalog = catalogService.getForEdit(catalogId);
			return catalog;
		} else if (("add-catalog".equals(request.getParameter("javax.portlet.action")) || "save-catalog".equals(request
				.getParameter("javax.portlet.action"))) && catalogId == null) {
			Store store = WebUtil.getAdminCurrentStore(request);
			Catalog catalog = catalogService.getNewCatalog(store);
			return catalog;
		} 
		return null;
	}

	@RenderMapping(params = "view=catalogs-view")
	public String view(RenderRequest request, RenderResponse response) {
		return "catalogs-view";
	}

	@ResourceMapping("getCatalogsForPage")
	@ResponseBody
	public Map<String, Object> getCatalogsForPage(ResourceRequest request, ResourceResponse resourceResponse, @RequestParam Integer page,
			@RequestParam Integer rows) {
		Store store = WebUtil.getAdminCurrentStore(request);
		Language language = languageService.getLanguageByCode(store, request.getLocale().getLanguage());
		List<Catalog> catalogs = catalogService.getCatalogsForPage(store, page, rows, language);
		Long total = catalogService.getNumberOfCatalogs(store);
		return JsonUtil.getPaginationData(catalogs, total);
	}

	@RenderMapping(params = "view=edit-catalog-view")
	public String viewEditCatalog(RenderRequest request, RenderResponse response) {
		return "catalog-edit";
	}

	@ActionMapping("add-catalog")
	public void addCatalog(ActionRequest request, ActionResponse response, Model model) {
		LOG.debug("add new catalog");
		response.setRenderParameter("view", "edit-catalog-view");
	}

	@ActionMapping("edit-catalog")
	public void editCatalog(ActionRequest request, ActionResponse response, Model model) {
		response.setRenderParameter("view", "edit-catalog-view");
	}

	@ActionMapping("remove-catalogs")
	public void removeCatalogs(ActionRequest request, ActionResponse response, Model model, @RequestParam("catalogIds") String ids) {
		List<Long> catalogIds = WebUtil.getIds(ids);
		catalogService.remove(catalogIds);
		response.setRenderParameter("view", "catalogs-view");
	}

	@ActionMapping("save-catalog")
	public void addCatalog(ActionRequest request, @ModelAttribute("catalog") @Valid Catalog catalog, BindingResult bindingResult,
			ActionResponse response, Model model) {
		if (!bindingResult.hasErrors()) {
			catalogService.save(catalog);
		}
		response.setRenderParameter("view", "edit-catalog-view");
	}

}
