package com.liferay.ecommerce.dao.currency;

import java.util.List;

import com.liferay.ecommerce.dao.BaseDataAccess;
import com.liferay.ecommerce.model.Currency;

public interface CurrencyDataAccess extends BaseDataAccess<Currency> {

	List<Currency> getAvailableCurrency(Long storeId);

}
