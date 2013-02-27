package com.liferay.ecommerce.service.language;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;
import java.util.Set;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import com.liferay.ecommerce.admin.service.language.LanguageService;
import com.liferay.ecommerce.admin.service.plugin.PluginService;
import com.liferay.ecommerce.model.Language;
import com.liferay.ecommerce.model.Store;
import com.liferay.portal.kernel.language.LanguageUtil;
import com.liferay.portal.kernel.transaction.Transactional;
import com.liferay.portal.kernel.util.LocaleUtil;

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
		List<Language> availbleLanguages = systemLanguageService.getAvailableLanguages(store);
		if (synchronizeLiferayLanguageWithApplication) {
			synchronizeLiferayLanguageWithApplication(store, new ArrayList<String>(languageCodes), availbleLanguages);
			availbleLanguages = systemLanguageService.getAvailableLanguages(store);
		}
		return availbleLanguages;
	}

	private void synchronizeLiferayLanguageWithApplication(Store store, List<String> languageCodes, List<Language> availbleLanguages) {
		for (Iterator<String> languageCodeIterator = languageCodes.iterator(); languageCodeIterator.hasNext();) {
			String languageCode = languageCodeIterator.next();
			for (Iterator<Language> languageIterator = availbleLanguages.iterator(); languageIterator.hasNext();) {
				Language language = languageIterator.next();
				if (language.getCode().equals(languageCode)) {
					languageIterator.remove();
					languageCodeIterator.remove();
					break;
				}
			}
		}

		for (Language language : availbleLanguages) {
			remove(language);
		}
		
		for (String languageCode : languageCodes) {
			Language language = getNewLanguage();
			language.setCode(languageCode);
			if (languageCode.equals(LocaleUtil.getDefault().getLanguage())) {
				language.setIsDefault(true);
			} else {
				language.setIsDefault(false);
			}
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

	@Override
	@Transactional(readOnly = true)
	public Language getDefaultLanguage(Store store) {
		Language language = systemLanguageService.getDefaultLanguage(store);
		if (language == null) {
			language = getNewLanguage();
			language.setCode(LocaleUtil.getDefault().getLanguage());
			language.setIsDefault(true);
			language.getStores().add(store);
			save(language);
		}
		return language;
	}
}
