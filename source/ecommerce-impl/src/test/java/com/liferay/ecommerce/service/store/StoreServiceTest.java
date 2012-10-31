package com.liferay.ecommerce.service.store;

import static org.junit.Assert.*;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.liferay.ecommerce.model.Store;
import com.liferay.ecommerce.model.StoreImpl;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:test-context.xml")
public class StoreServiceTest {

	@Autowired
	private StoreService storeService;
	
	@Test
	public void testSaveStore() {
		Store store = new StoreImpl();
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
