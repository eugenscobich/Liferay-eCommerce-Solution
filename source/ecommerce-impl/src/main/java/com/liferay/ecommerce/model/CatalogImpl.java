package com.liferay.ecommerce.model;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "catalog")
public class CatalogImpl extends BaseModelImpl implements Catalog {

	private static final long serialVersionUID = 1L;

	@ManyToOne(targetEntity = CatalogDescriptionImpl.class)
	@JoinColumn(name = "catalog_id")
	private Set<CatalogDescription> catalogDescriptions;

	@ManyToOne(targetEntity = CatalogImpl.class)
	@JoinColumn(name = "parent_catalog_id")
	private Set<Catalog> subcatalogs;

	@ManyToOne(targetEntity = StoreImpl.class)
	@JoinTable(name = "store_to_catalog", joinColumns = { @JoinColumn(name = "catalog_id") }, inverseJoinColumns = { @JoinColumn(name = "store_id") })
	private Set<Store> stores;

	@Override
	public Set<CatalogDescription> getCatalogDescriptions() {
		return catalogDescriptions;
	}

	@Override
	public void setCatalogDescriptions(Set<CatalogDescription> catalogDescriptions) {
		this.catalogDescriptions = catalogDescriptions;
	}

	@Override
	public Set<Store> getStores() {
		return stores;
	}

	@Override
	public void setStores(Set<Store> stores) {
		this.stores = stores;
	}

	@Override
	public Set<Catalog> getSubcatalogs() {
		return subcatalogs;
	}

	@Override
	public void setSubcatalogs(Set<Catalog> subcatalogs) {
		this.subcatalogs = subcatalogs;
	}

}
