package com.liferay.ecommerce.service.store;

import com.liferay.ecommerce.model.Store;

public interface StoreService {

	Store save(Store store);

	Store get(Long id);

}
