package com.liferay.ecommerce.dao.manufacturer;

import java.util.List;

import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import com.liferay.ecommerce.dao.BaseDataAccessImpl;
import com.liferay.ecommerce.model.Manufacturer;
import com.liferay.ecommerce.model.ManufacturerImpl;

@Repository
public class ManufacturerDataAccessImpl extends BaseDataAccessImpl<ManufacturerImpl, Manufacturer> implements ManufacturerDataAccess {

	@Override
	public List<Manufacturer> getAll(Long storeId) {
		TypedQuery<Manufacturer> query = entityManager.createNamedQuery("Manufacturer.getAll", Manufacturer.class);
		query.setParameter("storeId", storeId);
		return query.getResultList();
	}

}
