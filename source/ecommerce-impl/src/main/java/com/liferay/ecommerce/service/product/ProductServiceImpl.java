package com.liferay.ecommerce.service.product;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.liferay.ecommerce.dao.product.ProductDataAccess;
import com.liferay.ecommerce.model.Currency;
import com.liferay.ecommerce.model.Language;
import com.liferay.ecommerce.model.Price;
import com.liferay.ecommerce.model.PriceImpl;
import com.liferay.ecommerce.model.Product;
import com.liferay.ecommerce.model.ProductDescription;
import com.liferay.ecommerce.model.ProductDescriptionImpl;
import com.liferay.ecommerce.model.ProductDetails;
import com.liferay.ecommerce.model.ProductDetailsImpl;
import com.liferay.ecommerce.model.ProductImpl;
import com.liferay.ecommerce.model.Store;
import com.liferay.ecommerce.service.currency.CurrencyService;
import com.liferay.ecommerce.service.language.LanguageService;
import com.liferay.ecommerce.util.ServiceUtil;

@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	private ProductDataAccess productDataAccess;

	@Autowired
	private LanguageService languageService;

	@Autowired
	private CurrencyService currencyService;
	
	@Override
	@Transactional(readOnly = true)
	public List<Product> getProductsForPage(Store store, Integer page, Integer rows, Language language) {
		ServiceUtil.validateStore(store);
		List<Product> products = productDataAccess.getProductsForPage(store.getId(), page, rows, language.getId());
		return products;
	}

	@Override
	@Transactional(readOnly = true)
	public Long getNumberOfProducts(Store store) {
		ServiceUtil.validateStore(store);
		return productDataAccess.getNumberOfProducts(store.getId());
	}

	@Override
	@Transactional
	public Product getNewProduct(Store store) {
		Product product = new ProductImpl();

		// Prepare product description
		List<Language> languages = languageService.getAvailableLanguages(store);
		Set<ProductDescription> productDescriptions = new HashSet<ProductDescription>();
		for (Language language : languages) {
			ProductDescription productDescription = new ProductDescriptionImpl();
			productDescription.setLanguage(language);
			productDescriptions.add(productDescription);
		}
		product.setProductDescriptions(productDescriptions);

		// Prepare product details
		ProductDetails productDetails = new ProductDetailsImpl();
		product.setProductDetails(productDetails);

		// Prepare product prices
		List<Currency> currencies = currencyService.getAvailableCurrency(store);
		Set<Price> prices = new HashSet<Price>();
		for (Currency currency : currencies) {
			Price price = new PriceImpl();
			price.setCurrency(currency);
			prices.add(price);
		}
		product.setPrices(prices);

		return product;
	}
}
