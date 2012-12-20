package com.liferay.ecommerce.model;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity(name = "Catalog")
@Table(name = "catalog")
@NamedQueries({
		@NamedQuery(name = "Catalog.findAll", query = "SELECT c FROM Catalog c INNER JOIN c.stores s LEFT JOIN FETCH c.catalogDescriptions cdcpr WHERE s.id = :storeId and cdcpr.language.id = :languageId"),
		@NamedQuery(name = "Catalog.totalNumber", query = "SELECT COUNT(c.id) FROM Catalog c INNER JOIN c.stores s WHERE s.id = :storeId") })
public class CatalogImpl extends BaseModelImpl implements Catalog {

	private static final long serialVersionUID = 1L;

	@OneToMany(cascade = CascadeType.ALL, targetEntity = CatalogDescriptionImpl.class, orphanRemoval = true)
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
