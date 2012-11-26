package com.liferay.ecommerce.dao.language;

import com.liferay.ecommerce.dao.BaseDataAccess;
import com.liferay.ecommerce.model.Language;

public interface LanguageDataAccess extends BaseDataAccess<Language> {

	Language getLanguageByCode(Long storeId, String languageCode);

}
