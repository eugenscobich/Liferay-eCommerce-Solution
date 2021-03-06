package com.liferay.ecommerce.admin.service.store;

import java.util.List;

import com.liferay.ecommerce.model.Store;

public interface StoreService {

	Store save(Store store);

	Store get(Long id);

	List<Store> getAll();

	Store getDefaultStore();

	Store getNewStore();

}
