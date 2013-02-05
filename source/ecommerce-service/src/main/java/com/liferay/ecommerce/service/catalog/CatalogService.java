package com.liferay.ecommerce.service.catalog;

import java.util.List;

import com.liferay.ecommerce.model.Catalog;
import com.liferay.ecommerce.model.Language;
import com.liferay.ecommerce.model.Store;

public interface CatalogService {
	List<Catalog> getCatalogsForPage(Store store, Integer page, Integer rows, Language language);

	Long getNumberOfCatalogs(Store store);

	Catalog getNewCatalog(Store store);

	Catalog get(Long catalogId);

	Catalog getForEdit(Long catalogId);

	void save(Catalog catalog);

	void remove(List<Long> catalogIds);

	List<Catalog> getAllCatalogs(Store store, Language language);

	List<Catalog> getAllActiveCatalogs(Store store, Language language);
}
