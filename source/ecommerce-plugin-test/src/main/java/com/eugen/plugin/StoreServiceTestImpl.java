package com.eugen.plugin;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.liferay.ecommerce.dao.store.StoreDataAccess;
import com.liferay.ecommerce.model.Store;
import com.liferay.ecommerce.service.store.StoreService;

@Service
public class StoreServiceTestImpl implements StoreService {

	private static Logger LOG = Logger.getLogger(StoreServiceTestImpl.class);
	
	@Autowired
	private StoreDataAccess storeDataAccess;
	
	@Transactional
	public Store save(Store store) {
		LOG.info("Test Service");
		storeDataAccess.persist(store);
		return null;
	}

	@Transactional(readOnly=true)
	public Store get(Long id) {
		LOG.info("Test Service");
		return storeDataAccess.find(id);
	}

}
