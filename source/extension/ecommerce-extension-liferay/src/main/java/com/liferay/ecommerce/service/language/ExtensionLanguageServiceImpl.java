package com.liferay.ecommerce.service.language;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Set;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import com.liferay.ecommerce.model.Language;
import com.liferay.ecommerce.model.Store;
import com.liferay.ecommerce.service.plugin.PluginService;
import com.liferay.portal.kernel.language.LanguageUtil;
import com.liferay.portal.kernel.transaction.Transactional;

@Service
@Primary
public class ExtensionLanguageServiceImpl implements LanguageService {

	@Autowired
	private PluginService pluginService;

	@Value("${language.synchronize.liferay.with.application:false}")
	private Boolean synchronizeLiferayLanguageWithApplication;

	private LanguageService systemLanguageService;

	@PostConstruct
	private void init() {
		this.systemLanguageService = pluginService.getSystemBean(LanguageService.class);
	}

	@Override
	@Transactional
	public List<Language> getAvailableLanguages(Store store) {
		Set<String> languageCodes = new HashSet<String>();
		for (Locale locale : LanguageUtil.getAvailableLocales()) {
			languageCodes.add(locale.getLanguage());
		}
		List<Language> availbleLanguages = getLanguagesByCodes(store, new ArrayList<String>(languageCodes));
		if (synchronizeLiferayLanguageWithApplication) {
			synchronizeLiferayLanguageWithApplication(store, new ArrayList<String>(languageCodes), availbleLanguages);
			availbleLanguages = getLanguagesByCodes(store, new ArrayList<String>(languageCodes));
		}
		return availbleLanguages;
	}

	private void synchronizeLiferayLanguageWithApplication(Store store, List<String> languageCodes, List<Language> availbleLanguages) {

		Map<String, Language> availbleLanguageCodes = new HashMap<String, Language>();
		for (Language availbleLanguage : availbleLanguages) {
			availbleLanguageCodes.put(availbleLanguage.getCode(), availbleLanguage);
		}
		for (Iterator<String> languageCodeIterator = languageCodes.iterator(); languageCodeIterator.hasNext();) {
			String languageCode = languageCodeIterator.next();
			if (availbleLanguageCodes.get(languageCode) != null) {
				availbleLanguageCodes.remove(languageCode);
				languageCodeIterator.remove();
			}
		}
		for (String availbleLanguageCode : availbleLanguageCodes.keySet()) {
			remove(availbleLanguageCodes.get(availbleLanguageCode));
		}
		
		for (String languageCode : languageCodes) {
			Language language = getNewLanguage();
			language.setCode(languageCode);
			language.getStores().add(store);
			save(language);
		}
	}

	@Override
	public void remove(Language language) {
		systemLanguageService.remove(language);
	}

	@Override
	public List<Language> getLanguagesByCodes(Store store, List<String> languageCodes) {
		return systemLanguageService.getLanguagesByCodes(store, languageCodes);
	}

	@Override
	@Transactional
	public void save(Language language) {
		systemLanguageService.save(language);
	}

	@Override
	@Transactional(readOnly = true)
	public Language getNewLanguage() {
		return systemLanguageService.getNewLanguage();
	}

	@Override
	@Transactional(readOnly = true)
	public Language getLanguageByCode(Store store, String languageCode) {
		return systemLanguageService.getLanguageByCode(store, languageCode);
	}
}
