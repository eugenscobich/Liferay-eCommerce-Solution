package com.liferay.ecommerce.custom.service.language;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import com.liferay.ecommerce.dao.language.LanguageDataAccess;
import com.liferay.ecommerce.model.Language;
import com.liferay.ecommerce.model.Store;
import com.liferay.ecommerce.service.language.LanguageService;
import com.liferay.ecommerce.service.plugin.PluginService;
import com.liferay.portal.kernel.language.LanguageUtil;
import com.liferay.portal.kernel.transaction.Transactional;

@Service
@Primary
public class LanguageServiceImpl implements LanguageService {

	@Autowired
	private PluginService pluginService;

	@Autowired
	@Qualifier
	private LanguageDataAccess languageDataAccess;

	private LanguageService systemLanguageService;

	@PostConstruct
	private void init() {
		this.systemLanguageService = pluginService.getSystemBean(LanguageService.class);
	}

	@Override
	@Transactional(readOnly = true)
	public List<Language> getAvailableLanguages(Store store) {
		List<Language> result = new ArrayList<Language>();
		for (Locale locale : LanguageUtil.getAvailableLocales()) {
			Language language = systemLanguageService.getNewLanguage();
			language.setCode(locale.getLanguage());
			result.add(language);
		}
		return result;
	}

	@Override
	@Transactional
	public Language getLanguageByCode(Store store, String languageCode) {
		Language language = languageDataAccess.getLanguageByCode(store.getId(), languageCode);
		if (language == null) {
			Language lang = systemLanguageService.getNewLanguage();
			lang.setCode(languageCode);
			lang.setStores(store);
			systemLanguageService.save(lang);
			return lang;
		}
		return language;
	}

	@Override
	public void save(Language language) {
		throw new IllegalStateException("Not implemented method");
	}

	@Override
	public Language getNewLanguage() {
		throw new IllegalStateException("Not implemented method");
	}
}
