package com.liferay.ecommerce.dao.language;

import java.util.List;

import com.liferay.ecommerce.dao.BaseDataAccess;
import com.liferay.ecommerce.model.Language;

public interface LanguageDataAccess extends BaseDataAccess<Language> {

	Language getLanguageByCode(Long storeId, String languageCode);

	List<Language> getLanguagesByCodes(Long storeId, List<String> languageCodes);

	Language getDefaultLanguage(Long storeId);

	List<Language> getAvailableLanguages(Long storeId);

}
