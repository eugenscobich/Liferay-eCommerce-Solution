package com.liferay.ecommerce.service.language;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.liferay.ecommerce.dao.language.LanguageDataAccess;
import com.liferay.ecommerce.model.Language;
import com.liferay.ecommerce.model.LanguageImpl;
import com.liferay.ecommerce.model.Store;

@Service
public class LanguageServiceImpl implements LanguageService {

	@Autowired
	private LanguageDataAccess languageDataAccess;

	@Override
	public List<Language> getAvailableLanguages(Store store) {
		throw new IllegalStateException("Not implemented method");
	}

	@Override
	public Language getLanguageByCode(Store store, String language) {
		throw new IllegalStateException("Not implemented method");
	}

	@Override
	public Language getNewLanguage() {
		return new LanguageImpl();
	}

	@Override
	@Transactional
	public void save(Language language) {
		if (language.getId() == null) {
			languageDataAccess.persist(language);
		} else {
			languageDataAccess.merge(language);
		}
	}

}
