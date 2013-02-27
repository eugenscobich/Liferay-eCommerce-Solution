package com.liferay.ecommerce.dao.store;

import java.util.List;

import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import com.liferay.ecommerce.dao.BaseDataAccessImpl;
import com.liferay.ecommerce.model.Store;
import com.liferay.ecommerce.model.StoreImpl;

@Repository
public class StoreDataAccessImpl extends BaseDataAccessImpl<StoreImpl, Store> implements StoreDataAccess {

	@Override
	public Store getFirstStore() {
		TypedQuery<Store> query = entityManager.createNamedQuery("Store.getAllStores", Store.class);
		query.setMaxResults(1);
		return getSingleResult(query.getResultList());
	}

	@Override
	public List<Store> getAllActiveStores() {
		TypedQuery<Store> query = entityManager.createNamedQuery("Store.getAllActiveStores", Store.class);
		return query.getResultList();
	}

}
