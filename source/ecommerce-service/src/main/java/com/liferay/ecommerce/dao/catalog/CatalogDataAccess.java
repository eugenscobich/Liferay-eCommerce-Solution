package com.liferay.ecommerce.dao.catalog;

import java.util.List;

import com.liferay.ecommerce.dao.BaseDataAccess;
import com.liferay.ecommerce.model.Catalog;

public interface CatalogDataAccess extends BaseDataAccess<Catalog> {

	List<Catalog> getCatalogsForPage(Long storeId, Integer page, Integer rows, Long languageId);

	Long getNumberOfCatalogs(Long storeId);

	List<Catalog> getCatalogChildren(Long parentId, Long languageId);

	List<Catalog> getAllCatalogs(Long storeId, Long languageId);

	List<Catalog> getAllActiveCatalogs(Long storeId, Long languageId);

	List<Catalog> getActiveCatalogChildren(Long parentId, Long languageId);

}
