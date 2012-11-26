package com.liferay.ecommerce.dao.language;

import javax.persistence.TypedQuery;

import com.liferay.ecommerce.dao.BaseDataAccessImpl;
import com.liferay.ecommerce.model.Language;
import com.liferay.ecommerce.model.LanguageImpl;

public class LanguageDataAccessImpl extends BaseDataAccessImpl<LanguageImpl, Language> implements LanguageDataAccess {

	@Override
	public Language getLanguageByCode(Long storeId, String languageCode) {
		TypedQuery<Language> query = entityManager.createNamedQuery("Language.getLanguageByCode", Language.class);
		query.setParameter("storeId", storeId);
		query.setParameter("languageCode", languageCode);
		return getSingleResult(query.getResultList());
	}

}
