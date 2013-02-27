package com.liferay.ecommerce.dao.store;

import java.util.List;

import com.liferay.ecommerce.dao.BaseDataAccess;
import com.liferay.ecommerce.model.Store;

public interface StoreDataAccess extends BaseDataAccess<Store> {

	Store getFirstStore();

	List<Store> getAllActiveStores();

}
