package com.liferay.ecommerce.admin.service.language;

import java.util.List;

import com.liferay.ecommerce.model.Language;
import com.liferay.ecommerce.model.Store;

public interface LanguageService {

	List<Language> getAvailableLanguages(Store store);

	Language getLanguageByCode(Store store, String languageCode);

	Language getNewLanguage();

	void save(Language language);

	List<Language> getLanguagesByCodes(Store store, List<String> languageCodes);

	void remove(Language language);

	Language getDefaultLanguage(Store store);
}
