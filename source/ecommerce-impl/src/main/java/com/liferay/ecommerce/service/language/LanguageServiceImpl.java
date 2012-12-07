package com.liferay.ecommerce.service.language;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.liferay.ecommerce.dao.language.LanguageDataAccess;
import com.liferay.ecommerce.model.Language;
import com.liferay.ecommerce.model.LanguageImpl;
import com.liferay.ecommerce.model.Store;
import com.liferay.ecommerce.util.ServiceUtil;

@Service
public class LanguageServiceImpl implements LanguageService {

	@Autowired
	private LanguageDataAccess languageDataAccess;

	@Override
	@Transactional(readOnly = true)
	public List<Language> getAvailableLanguages(Store store) {
		ServiceUtil.validateStore(store);
		return languageDataAccess.getAvailableLanguages(store.getId());
	}

	@Override
	@Transactional(readOnly = true)
	public Language getLanguageByCode(Store store, String languageCode) {
		Language language = languageDataAccess.getLanguageByCode(store.getId(), languageCode);
		if (language == null) {
			Language lang = getNewLanguage();
			lang.setCode(languageCode);
			lang.getStores().add(store);
			save(lang);
			return lang;
		}
		return language;
	}

	@Override
	@Transactional(readOnly = true)
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

	@Override
	public List<Language> getLanguagesByCodes(Store store, List<String> languageCodes) {
		ServiceUtil.validateStore(store);
		return languageDataAccess.getLanguagesByCodes(store.getId(), languageCodes);
	}

	@Override
	public void remove(Language language) {
		languageDataAccess.remove(language);
	}

	@Override
	public Language getDefaultLanguage(Store store) {
		ServiceUtil.validateStore(store);
		Language language = languageDataAccess.getDefaultLanguage(store.getId());
		return language;
	}

}
