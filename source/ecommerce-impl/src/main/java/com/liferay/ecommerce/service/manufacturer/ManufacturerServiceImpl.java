package com.liferay.ecommerce.service.manufacturer;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.liferay.ecommerce.dao.manufacturer.ManufacturerDataAccess;
import com.liferay.ecommerce.model.Manufacturer;
import com.liferay.ecommerce.model.Store;

@Service
public class ManufacturerServiceImpl implements ManufacturerService {

	@Autowired
	private ManufacturerDataAccess manufacturerDataAccess;

	@Override
	@Transactional(readOnly = true)
	public Manufacturer get(Long manufacturerId) {
		return manufacturerDataAccess.find(manufacturerId);
	}

	@Override
	@Transactional(readOnly = true)
	public List<Manufacturer> getAll(Store store) {
		return manufacturerDataAccess.getAll(store.getId());
	}

}
