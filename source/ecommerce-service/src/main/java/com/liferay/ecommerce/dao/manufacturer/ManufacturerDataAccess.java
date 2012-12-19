package com.liferay.ecommerce.dao.manufacturer;

import java.util.List;

import com.liferay.ecommerce.dao.BaseDataAccess;
import com.liferay.ecommerce.model.Manufacturer;

public interface ManufacturerDataAccess extends BaseDataAccess<Manufacturer> {

	List<Manufacturer> getAll(Long storeId);

}
