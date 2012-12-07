package com.liferay.ecommerce.dao.language;

import java.util.List;

import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import com.liferay.ecommerce.dao.BaseDataAccessImpl;
import com.liferay.ecommerce.model.Language;
import com.liferay.ecommerce.model.LanguageImpl;

@Repository
public class LanguageDataAccessImpl extends BaseDataAccessImpl<LanguageImpl, Language> implements LanguageDataAccess {

	@Override
	public Language getLanguageByCode(Long storeId, String languageCode) {
		TypedQuery<Language> query = entityManager.createNamedQuery("Language.getLanguageByCode", Language.class);
		query.setParameter("storeId", storeId);
		query.setParameter("languageCode", languageCode);
		return getSingleResult(query.getResultList());
	}

	@Override
	public List<Language> getLanguagesByCodes(Long storeId, List<String> languageCodes) {
		TypedQuery<Language> query = entityManager.createNamedQuery("Language.getLanguageByCodes", Language.class);
		query.setParameter("storeId", storeId);
		query.setParameter("languageCodes", languageCodes);
		return query.getResultList();
	}

	@Override
	public Language getDefaultLanguage(Long storeId) {
		TypedQuery<Language> query = entityManager.createNamedQuery("Language.getDefaultLanguage", Language.class);
		query.setParameter("storeId", storeId);
		return getSingleResult(query.getResultList());
	}

	@Override
	public List<Language> getAvailableLanguages(Long storeId) {
		TypedQuery<Language> query = entityManager.createNamedQuery("Language.getAvailableLanguages", Language.class);
		query.setParameter("storeId", storeId);
		return query.getResultList();
	}

}
