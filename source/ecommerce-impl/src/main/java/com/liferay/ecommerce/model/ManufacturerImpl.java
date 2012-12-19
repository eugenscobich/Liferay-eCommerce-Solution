package com.liferay.ecommerce.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.Type;

@Entity(name = "Manufacturer")
@Table(name = "manufacturer")
@NamedQueries({ @NamedQuery(name = "Manufacturer.getAll", query = "SELECT m FROM Manufacturer m INNER JOIN m.stores s WHERE s.id = :storeId") })
public class ManufacturerImpl extends BaseModelImpl implements Manufacturer {

	private static final long serialVersionUID = 1L;

	@Column(name = "name")
	private String name;

	@Column(name = "description")
	@Type(type = "text")
	private String description;

	@OneToOne(cascade = CascadeType.ALL, targetEntity = MediaImpl.class)
	@JoinColumn(name = "media_id")
	private Media media;

	@ManyToMany(targetEntity = StoreImpl.class)
	@JoinTable(name = "store_to_manufacturer", joinColumns = { @JoinColumn(name = "manufacturer_id") }, inverseJoinColumns = { @JoinColumn(name = "store_id") })
	private Set<Store> stores = new HashSet<Store>();

	@Override
	public String getName() {
		return name;
	}

	@Override
	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String getDescription() {
		return description;
	}

	@Override
	public void setDescription(String description) {
		this.description = description;
	}

	@Override
	public Media getMedia() {
		return media;
	}

	@Override
	public void setMedia(Media media) {
		this.media = media;
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
	public int hashCode() {
		final int prime = 31;
		int result = super.hashCode();
		result = prime * result + ((getId() == null) ? 0 : getId().hashCode());
		result = prime * result + ((name == null) ? 0 : name.hashCode());
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
		ManufacturerImpl other = (ManufacturerImpl) obj;
		if (getId() == null) {
			if (other.getId() != null)
				return false;
		} else if (!getId().equals(other.getId()))
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		return true;
	}


}
