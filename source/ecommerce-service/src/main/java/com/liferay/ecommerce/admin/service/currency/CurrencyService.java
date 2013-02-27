package com.liferay.ecommerce.admin.service.currency;

import java.util.List;

import com.liferay.ecommerce.model.Currency;
import com.liferay.ecommerce.model.Store;

public interface CurrencyService {

	List<Currency> getAvailableCurrency(Store store);

}
