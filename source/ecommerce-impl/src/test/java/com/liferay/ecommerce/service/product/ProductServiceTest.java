package com.liferay.ecommerce.service.product;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.liferay.ecommerce.model.Language;
import com.liferay.ecommerce.model.Product;
import com.liferay.ecommerce.model.Store;
import com.liferay.ecommerce.service.language.LanguageService;
import com.liferay.ecommerce.service.store.StoreService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:test-context.xml")
public class ProductServiceTest {

	@Autowired
	private ProductService productService;

	@Autowired
	private StoreService storeService;

	@Autowired
	private LanguageService languageService;

	@Test
	public void testGetProductsForPage() {
		Store store = storeService.get(1l);
		Language language = languageService.getLanguageByCode(store, "en");
		List<Product> products = productService.getProductsForPage(store, 1, 10, language);
		assertNotNull(products);
		assertNotNull(products.get(0));
		assertEquals(1, products.get(0).getProductDescriptions().size());
		assertNotNull(products.get(0).getProductDetails());
	}
}
