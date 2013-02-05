package com.liferay.ecommerce.model;

import java.util.List;
import java.util.Set;

public interface Catalog extends BaseModel {

	List<CatalogDescription> getCatalogDescriptions();

	void setCatalogDescriptions(List<CatalogDescription> catalogDescriptions);

	Set<Store> getStores();

	void setStores(Set<Store> stores);

	List<Catalog> getChildren();

	void setChildren(List<Catalog> children);

	Catalog getParent();

	void setParent(Catalog parent);

	Boolean getIsActive();

	void setIsActive(Boolean isActive);

}
