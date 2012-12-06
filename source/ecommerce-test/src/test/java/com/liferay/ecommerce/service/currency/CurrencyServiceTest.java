package com.liferay.ecommerce.service.currency;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;

import com.liferay.ecommerce.model.Currency;
import com.liferay.ecommerce.model.Store;
import com.liferay.ecommerce.service.store.StoreService;
import com.liferay.ecommerce.util.ECommerceJUnit4ClassRunner;


@RunWith(ECommerceJUnit4ClassRunner.class)
@ContextConfiguration("classpath:test-context.xml")
public class CurrencyServiceTest {

	@Autowired
	private StoreService storeService;

	@Autowired
	private CurrencyService currencyService;

	@Test
	public void getAvailableCurrency() {
		Store store = storeService.get(1l);
		List<Currency> currencies = currencyService.getAvailableCurrency(store);
		assertNotNull(currencies);
		assertEquals(2, currencies.size());
	}

}
