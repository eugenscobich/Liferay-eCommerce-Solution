package com.eugen.plugin;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.liferay.ecommerce.dao.store.StoreDataAccess;
import com.liferay.ecommerce.model.Store;
import com.liferay.ecommerce.service.store.StoreService;

@Service
public class EugenStoreServiceTestImpl implements StoreService {

	private static Logger LOG = Logger.getLogger(EugenStoreServiceTestImpl.class);

	@Autowired
	private StoreDataAccess storeDataAccess;

	@Override
	@Transactional
	public Store save(Store store) {
		LOG.info("Test Service");
		storeDataAccess.persist(store);
		return null;
	}

	@Override
	@Transactional(readOnly = true)
	public Store get(Long id) {
		LOG.info("Test Service");
		return storeDataAccess.find(id);
	}

	@Override
	public List<Store> getAll() {
		LOG.info("Test Service");
		return storeDataAccess.getAll();
	}

}
