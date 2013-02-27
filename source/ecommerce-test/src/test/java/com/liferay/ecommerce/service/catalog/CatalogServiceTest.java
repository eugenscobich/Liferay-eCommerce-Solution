package com.liferay.ecommerce.service.catalog;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;

import com.liferay.ecommerce.admin.service.catalog.CatalogService;
import com.liferay.ecommerce.admin.service.language.LanguageService;
import com.liferay.ecommerce.admin.service.store.StoreService;
import com.liferay.ecommerce.model.Catalog;
import com.liferay.ecommerce.model.Language;
import com.liferay.ecommerce.model.Store;
import com.liferay.ecommerce.util.ECommerceJUnit4ClassRunner;

@RunWith(ECommerceJUnit4ClassRunner.class)
@ContextConfiguration("classpath:test-context.xml")
public class CatalogServiceTest {

	@Autowired
	private StoreService storeService;

	@Autowired
	private CatalogService catalogService;

	@Autowired
	private LanguageService languageService;

	@Test
	public void testGetCatalogForPage() {

		Store store = storeService.get(1l);
		Language language = languageService.getLanguageByCode(store, "en");
		List<Catalog> catalogs = catalogService.getCatalogsForPage(store, 1, 10, language);
		assertNotNull(catalogs);
		assertEquals(2, catalogs.size());
		assertNotNull(catalogs.get(0));
		assertEquals(1, catalogs.get(0).getCatalogDescriptions().size());
		assertNotNull(catalogs.get(1).getChildren());

	}

	@Test
	public void testGetNewCatalog() {
		Store store = storeService.get(1l);
		Catalog catalog = catalogService.getNewCatalog(store);
		assertNotNull(catalog);
		assertEquals(38, catalog.getCatalogDescriptions().size());
	}
}
