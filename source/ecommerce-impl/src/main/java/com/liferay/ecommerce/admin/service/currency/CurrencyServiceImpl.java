package com.liferay.ecommerce.admin.service.currency;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.liferay.ecommerce.admin.service.currency.CurrencyService;
import com.liferay.ecommerce.dao.currency.CurrencyDataAccess;
import com.liferay.ecommerce.model.Currency;
import com.liferay.ecommerce.model.Store;

@Service
public class CurrencyServiceImpl implements CurrencyService {

	@Autowired
	private CurrencyDataAccess currencyDataAccess;

	@Override
	@Transactional(readOnly = true)
	public List<Currency> getAvailableCurrency(Store store) {
		return currencyDataAccess.getAvailableCurrency(store.getId());
	}

}
