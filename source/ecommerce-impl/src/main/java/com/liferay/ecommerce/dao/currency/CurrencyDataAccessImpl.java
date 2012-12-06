package com.liferay.ecommerce.dao.currency;

import java.util.List;

import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import com.liferay.ecommerce.dao.BaseDataAccessImpl;
import com.liferay.ecommerce.model.Currency;
import com.liferay.ecommerce.model.CurrencyImpl;

@Repository
public class CurrencyDataAccessImpl extends BaseDataAccessImpl<CurrencyImpl, Currency> implements CurrencyDataAccess {

	@Override
	public List<Currency> getAvailableCurrency(Long storeId) {
		TypedQuery<Currency> query = entityManager.createNamedQuery("Currency.getAvailableCurrency", Currency.class);
		query.setParameter("storeId", storeId);
		return query.getResultList();
	}

}
