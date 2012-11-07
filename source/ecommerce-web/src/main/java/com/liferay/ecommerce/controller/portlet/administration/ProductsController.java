package com.liferay.ecommerce.controller.portlet.administration;

import java.util.List;

import javax.portlet.RenderRequest;
import javax.portlet.RenderResponse;
import javax.portlet.ResourceRequest;
import javax.portlet.ResourceResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.portlet.bind.annotation.RenderMapping;

import com.liferay.ecommerce.controller.portlet.BaseController;
import com.liferay.ecommerce.model.Product;
import com.liferay.ecommerce.model.Store;
import com.liferay.ecommerce.service.product.ProductService;
import com.liferay.ecommerce.service.store.StoreService;
import com.liferay.ecommerce.util.WebUtil;

@Controller
@RequestMapping(value = "VIEW")
public class ProductsController extends BaseController {

	// private static Logger LOG = Logger.getLogger(ProductsController.class);

	@Autowired
	private MessageSource messageSource;

	@Autowired
	private StoreService storeService;

	@Autowired
	private ProductService productService;

	@RenderMapping(params = "view=products-view")
	public String view(RenderRequest request, RenderResponse response) {
		request.setAttribute("message", "Product");
		return "products-view";
	}

	public String getProductsForPage(ResourceRequest request, ResourceResponse resourceResponse, @RequestParam Integer page, @RequestParam Integer rows) {
		Store store = WebUtil.getAdminCurrentStore(request);
		List<Product> products = productService.getProductsForPage(store, page, rows);
		return WebUtil.returnJSON(request, products);
	}
}
