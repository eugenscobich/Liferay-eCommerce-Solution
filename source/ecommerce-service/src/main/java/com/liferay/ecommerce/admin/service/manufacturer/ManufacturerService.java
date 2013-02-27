package com.liferay.ecommerce.admin.service.manufacturer;

import java.util.List;

import com.liferay.ecommerce.model.Manufacturer;
import com.liferay.ecommerce.model.Store;

public interface ManufacturerService {

	Manufacturer get(Long manufacturerId);

	List<Manufacturer> getAll(Store store);

}
