package com.liferay.ecommerce.controller.administration;

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

import com.liferay.ecommerce.admin.service.language.LanguageService;
import com.liferay.ecommerce.admin.service.manufacturer.ManufacturerService;
import com.liferay.ecommerce.admin.service.product.ProductService;
import com.liferay.ecommerce.admin.service.store.StoreService;
import com.liferay.ecommerce.model.Language;
import com.liferay.ecommerce.model.Manufacturer;
import com.liferay.ecommerce.model.Product;
import com.liferay.ecommerce.model.Store;
import com.liferay.ecommerce.util.JsonUtil;
import com.liferay.ecommerce.util.WebUtil;
import com.liferay.ecommerce.util.bind.CustomCatalogsPropertyEditor;
import com.liferay.ecommerce.util.bind.CustomManufacturerPropertyEditor;
import com.liferay.ecommerce.util.formater.DateFormaterUtil;

@Controller
@RequestMapping(value = "VIEW")
public class ProductsController extends BaseAdminController {

	private static Logger LOG = Logger.getLogger(ProductsController.class);

	@Autowired
	private MessageSource messageSource;

	@Autowired
	private StoreService storeService;

	@Autowired
	private ProductService productService;

	@Autowired
	private LanguageService languageService;

	@Autowired
	private CustomManufacturerPropertyEditor customManufacturerPropertyEditor;

	@Autowired
	private CustomCatalogsPropertyEditor customCatalogsPropertyEditor;
	
	@Autowired
	private ManufacturerService manufacturerService;

	@InitBinder
	public void initBinder(WebDataBinder binder) {
		CustomDateEditor customDateEditor = new CustomDateEditor(DateFormaterUtil.getDateFormatForWeb(), true,
				DateFormaterUtil.WEB_FORMAT.length());
		binder.registerCustomEditor(Date.class, customDateEditor);
		binder.registerCustomEditor(Manufacturer.class, customManufacturerPropertyEditor);
		binder.registerCustomEditor(List.class, "catalogs", customCatalogsPropertyEditor);

	}

	@ModelAttribute("product")
	public Product getNewProduct(PortletRequest request, @RequestParam(required = false) Long productId) {
		if (("save-product".equals(request.getParameter("javax.portlet.action"))
				|| "edit-product".equals(request.getParameter("javax.portlet.action"))) && productId != null) {
			Product product = productService.getForEdit(productId);
			return product;
		} else if (("add-product".equals(request.getParameter("javax.portlet.action")) || "save-product".equals(request
				.getParameter("javax.portlet.action"))) && productId == null) {
			Store store = WebUtil.getAdminCurrentStore(request);
			Product product = productService.getNewProduct(store);
			return product;
		} 
		return null;
	}

	@ModelAttribute("manufacturers")
	public List<Manufacturer> getManufacturers(PortletRequest request) {
		if ("add-product".equals(request.getParameter("javax.portlet.action"))
				|| "edit-product".equals(request.getParameter("javax.portlet.action"))
				|| "save-product".equals(request.getParameter("javax.portlet.action"))) {
			Store store = WebUtil.getAdminCurrentStore(request);
			return manufacturerService.getAll(store);
		}
		return null;
	}

	@RenderMapping(params = "view=products-view")
	public String view(RenderRequest request, RenderResponse response) {
		return "products-view";
	}

	@ResourceMapping("getProductsForPage")
	@ResponseBody
	public Map<String, Object> getProductsForPage(ResourceRequest request, ResourceResponse resourceResponse, @RequestParam Integer page,
			@RequestParam Integer rows) {
		Store store = WebUtil.getAdminCurrentStore(request);
		Language language = languageService.getLanguageByCode(store, request.getLocale().getLanguage());
		List<Product> products = productService.getProductsForPage(store, page, rows, language);
		Long total = productService.getNumberOfProducts(store);
		return JsonUtil.getPaginationData(products, total);
	}

	@RenderMapping(params = "view=edit-product-view")
	public String viewEditProduct(RenderRequest request, RenderResponse response) {
		return "product-edit";
	}

	@ActionMapping("add-product")
	public void addProduct(ActionRequest request, ActionResponse response, Model model) {
		LOG.debug("add new product");
		response.setRenderParameter("view", "edit-product-view");
	}

	@ActionMapping("edit-product")
	public void editProduct(ActionRequest request, ActionResponse response, Model model) {
		response.setRenderParameter("view", "edit-product-view");
	}

	@ActionMapping("remove-products")
	public void removeProducts(ActionRequest request, ActionResponse response, Model model, @RequestParam("productIds") String ids) {
		List<Long> productIds = WebUtil.getIds(ids);
		productService.remove(productIds);
		response.setRenderParameter("view", "products-view");
	}

	@ActionMapping("save-product")
	public void addProduct(ActionRequest request, @ModelAttribute("product") @Valid Product product, BindingResult bindingResult,
			ActionResponse response, Model model) {
		if (!bindingResult.hasErrors()) {
			productService.save(product);
		}
		response.setRenderParameter("view", "edit-product-view");
	}

}
