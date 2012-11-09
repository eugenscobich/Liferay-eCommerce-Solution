package com.liferay.ecommerce.service.product;

import static org.junit.Assert.assertNotNull;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.liferay.ecommerce.model.Product;
import com.liferay.ecommerce.model.Store;
import com.liferay.ecommerce.service.store.StoreService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:test-context.xml")
public class ProductServiceTest {

	@Autowired
	private ProductService productService;

	@Autowired
	private StoreService storeService;

	@Test
	public void testGetProductsForPage() {
		Store store = storeService.get(1l);
		List<Product> products = productService.getProductsForPage(store, 1, 10);
		assertNotNull(products);
		assertNotNull(products.get(0));
		assertNotNull(products.get(0).getProductDetails());
	}
}
