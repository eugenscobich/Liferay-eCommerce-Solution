package com.liferay.ecommerce.service.store;

import java.util.List;

import com.liferay.ecommerce.model.Store;

public interface StoreService {
	Store get(Long id);

	Store getDefaultStore();

	List<Store> getAllStores();
}
