package com.liferay.ecommerce.service.language;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;

import com.liferay.ecommerce.admin.service.language.LanguageService;
import com.liferay.ecommerce.admin.service.store.StoreService;
import com.liferay.ecommerce.model.Language;
import com.liferay.ecommerce.model.Store;
import com.liferay.ecommerce.util.ECommerceJUnit4ClassRunner;


@RunWith(ECommerceJUnit4ClassRunner.class)
@ContextConfiguration("classpath:test-context.xml")
public class LanguageServiceTest {

	@Autowired
	private StoreService storeService;

	@Autowired
	private LanguageService languageService;

	@Test
	public void getAvailableLanguagesTest() {
		Store store = storeService.get(1l);
		List<Language> languages = languageService.getAvailableLanguages(store);
		assertNotNull(languages);
		assertEquals(38, languages.size());
	}

	@Test
	public void getDefaultLanguageTest() {
		Store store = storeService.get(1l);
		Language language = languageService.getDefaultLanguage(store);
		assertNotNull(language);
		assertNotNull(language.getId());
		assertEquals(true, language.getIsDefault());
	}
}
