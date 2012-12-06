package com.liferay.ecommerce.controller.portlet.administration;

import java.util.List;
import java.util.Map;

import javax.portlet.RenderRequest;
import javax.portlet.RenderResponse;
import javax.portlet.ResourceRequest;
import javax.portlet.ResourceResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.portlet.bind.annotation.RenderMapping;
import org.springframework.web.portlet.bind.annotation.ResourceMapping;

import com.liferay.ecommerce.model.Language;
import com.liferay.ecommerce.model.Product;
import com.liferay.ecommerce.model.Store;
import com.liferay.ecommerce.service.language.LanguageService;
import com.liferay.ecommerce.service.product.ProductService;
import com.liferay.ecommerce.service.store.StoreService;
import com.liferay.ecommerce.util.JsonUtil;
import com.liferay.ecommerce.util.WebUtil;

@Controller
@RequestMapping(value = "VIEW")
public class ProductsController extends BaseAdminController {

	// private static Logger LOG = Logger.getLogger(ProductsController.class);

	@Autowired
	private MessageSource messageSource;

	@Autowired
	private StoreService storeService;

	@Autowired
	private ProductService productService;

	@Autowired
	private LanguageService languageService;

	@RenderMapping(params = "view=products-view")
	public String view(RenderRequest request, RenderResponse response) {
		request.setAttribute("message", "Product");
		return "products-view";
	}

	@ResourceMapping("getProductsForPage")
	@ResponseBody
	public Map<String, Object> getProductsForPage(ResourceRequest request, ResourceResponse resourceResponse, @RequestParam Integer page, @RequestParam Integer rows) {
		Store store = WebUtil.getAdminCurrentStore(request);
		Language language = languageService.getLanguageByCode(store, request.getLocale().getLanguage());
		List<Product> products = productService.getProductsForPage(store, page, rows, language);
		Long total = productService.getNumberOfProducts(store);
		return JsonUtil.getPaginationData(products, total);
	}

	@RenderMapping(params = "view=add-product-view")
	public String viewAddProduct(RenderRequest request, RenderResponse response, Model model) {
		Store store = WebUtil.getAdminCurrentStore(request);
		Product product = productService.getNewProduct(store);
		model.addAttribute("product", product);
		return "product-edit";
	}

}
