package com.liferay.ecommerce.service.store;

import static org.junit.Assert.assertNotNull;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;

import com.liferay.ecommerce.model.Store;
import com.liferay.ecommerce.util.ECommerceJUnit4ClassRunner;

@RunWith(ECommerceJUnit4ClassRunner.class)
@ContextConfiguration("classpath:test-context.xml")
public class StoreServiceTest {

	@Autowired
	private StoreService storeService;

	@Test
	public void testSaveStore() {
		Store store = storeService.getNewStore();
		store.setName("Eugen");
		storeService.save(store);
		assertNotNull(store);
	}
	
	@Test
	public void testGetStore() {
		Store store = storeService.get(1l);
		assertNotNull(store);
	}
}
