package com.liferay.ecommerce.model;

import java.util.Set;

public interface Catalog {

	Set<CatalogDescription> getCatalogDescriptions();

	void setCatalogDescriptions(Set<CatalogDescription> catalogDescriptions);

	Set<Store> getStores();

	void setStores(Set<Store> stores);

	Set<Catalog> getSubcatalogs();

	void setSubcatalogs(Set<Catalog> subcatalogs);

}
