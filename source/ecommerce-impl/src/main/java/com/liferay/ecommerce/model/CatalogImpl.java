package com.liferay.ecommerce.model;

import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.liferay.ecommerce.util.constrains.ItselfParent;

@Entity(name = "Catalog")
@Table(name = "catalog")
@NamedQueries({
		@NamedQuery(name = "Catalog.findAll", query = "SELECT c FROM Catalog c INNER JOIN c.stores s LEFT JOIN FETCH c.catalogDescriptions cdcpr WHERE s.id = :storeId AND cdcpr.language.id = :languageId AND c.parent IS NULL"),
		@NamedQuery(name = "Catalog.totalNumber", query = "SELECT COUNT(c.id) FROM Catalog c INNER JOIN c.stores s WHERE s.id = :storeId AND c.parent IS NULL"),
		@NamedQuery(name = "Catalog.getCatalogChildren", query = "SELECT c FROM Catalog c LEFT JOIN FETCH c.catalogDescriptions cdcpr WHERE cdcpr.language.id = :languageId AND c.parent.id = :parentId") })
@ItselfParent(checkField = "parent")
public class CatalogImpl extends BaseModelImpl implements Catalog {

	private static final long serialVersionUID = 1L;

	@OneToMany(cascade = CascadeType.ALL, targetEntity = CatalogDescriptionImpl.class, orphanRemoval = true)
	@JoinColumn(name = "catalog_id")
	private List<CatalogDescription> catalogDescriptions;

	@JsonIgnore
	@ManyToOne(targetEntity = CatalogImpl.class)
	@JoinColumn(name = "parent_catalog_id")
	private Catalog parent;

	@OneToMany(targetEntity = CatalogImpl.class)
	@JoinColumn(name = "parent_catalog_id")
	private List<Catalog> children;

	@ManyToMany(targetEntity = StoreImpl.class)
	@JoinTable(name = "store_to_catalog", joinColumns = { @JoinColumn(name = "catalog_id") }, inverseJoinColumns = { @JoinColumn(name = "store_id") })
	private Set<Store> stores;

	@Transient
	private String text;

	@Override
	public List<CatalogDescription> getCatalogDescriptions() {
		return catalogDescriptions;
	}

	@Override
	public void setCatalogDescriptions(List<CatalogDescription> catalogDescriptions) {
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
	public List<Catalog> getChildren() {
		return children;
	}

	@Override
	public void setChildren(List<Catalog> children) {
		this.children = children;
	}

	@Override
	public Catalog getParent() {
		return parent;
	}

	@Override
	public void setParent(Catalog parent) {
		this.parent = parent;
	}

	public String getText() {
		return getCatalogDescriptions().get(0).getName();
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = super.hashCode();
		result = prime * result + ((getId() == null) ? 0 : getId().hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (!super.equals(obj))
			return false;
		if (getClass() != obj.getClass())
			return false;
		CatalogImpl other = (CatalogImpl) obj;
		if (getId() == null) {
			if (other.getId() != null)
				return false;
		} else if (!getId().equals(other.getId()))
			return false;
		return true;
	}

}
