package com.liferay.ecommerce.admin.service.product;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.liferay.ecommerce.admin.service.currency.CurrencyService;
import com.liferay.ecommerce.admin.service.language.LanguageService;
import com.liferay.ecommerce.admin.service.product.ProductService;
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
		List<ProductDescription> productDescriptions = new ArrayList<ProductDescription>();
		for (Language language : languages) {
			ProductDescription productDescription = new ProductDescriptionImpl();
			productDescription.setLanguage(language);
			if (language.getIsDefault()) {
				productDescription.setIsDefault(true);
			} else {
				productDescription.setIsDefault(false);
			}
			productDescriptions.add(productDescription);
		}
		product.setProductDescriptions(productDescriptions);

		// Prepare product details
		ProductDetails productDetails = new ProductDetailsImpl();
		productDetails.setAvailableDate(new Date());
		productDetails.setCreateDate(new Date());
		product.setProductDetails(productDetails);
		// Prepare product prices
		List<Currency> currencies = currencyService.getAvailableCurrency(store);
		Set<Price> prices = new HashSet<Price>();
		for (Currency currency : currencies) {
			Price price = new PriceImpl();
			if (currency.getIsDefault()) {
				price.setIsDefault(true);
			} else {
				price.setIsDefault(false);
			}
			price.setCurrency(currency);
			prices.add(price);
		}
		product.setPrices(prices);
		product.setStores(new HashSet<Store>(Arrays.asList(store)));
		return product;
	}

	@Override
	@Transactional(readOnly = true)
	public Product get(Long productId) {
		return productDataAccess.find(productId);
	}

	@Override
	@Transactional(readOnly = true)
	public Product getForEdit(Long productId) {
		Product product = productDataAccess.find(productId);
		product.getProductDescriptions().size();
		product.getCatalogs().size();
		product.getDigitalDownloads().size();
		product.getMedias().size();
		product.getPrices().size();
		return product;
	}

	@Override
	@Transactional
	public void save(Product product) {
		product.getProductDetails().setLastModifiedDate(new Date());
		if (product.getId() == null) {
			productDataAccess.persist(product);
		} else {
			productDataAccess.merge(product);
		}
	}

	@Override
	@Transactional
	public void remove(List<Long> productIds) {
		for (Long id : productIds) {
			Product product = productDataAccess.find(id);
			if (product != null) {
				productDataAccess.remove(product);
			}
		}

	}
}
