package com.liferay.ecommerce.service.store;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.liferay.ecommerce.dao.store.StoreDataAccess;
import com.liferay.ecommerce.model.Store;

@Service
public class StoreServiceImpl implements StoreService {

	@Autowired
	private StoreDataAccess storeDataAccess;

	@Override
	@Transactional
	public Store save(Store store) {
		storeDataAccess.persist(store);
		return store;
	}

	@Override
	@Transactional(readOnly = true)
	public Store get(Long id) {
		return storeDataAccess.find(id);
	}

	@Override
	public List<Store> getAll() {
		return storeDataAccess.getAll();
	}

	@Override
	public Store getDefaultStore() {
		return storeDataAccess.getFirstStore();
	}
}
