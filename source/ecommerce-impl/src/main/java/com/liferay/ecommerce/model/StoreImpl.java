package com.liferay.ecommerce.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

@Entity(name = "Store")
@Table(name = "store")
@NamedQueries({ 
	@NamedQuery(name = "Store.getAllStores", query = "SELECT s FROM Store s"),
	@NamedQuery(name = "Store.getAllActiveStores", query = "SELECT s FROM Store s WHERE s.isActive = true")})
public class StoreImpl extends BaseModelImpl implements Store {

	private static final long serialVersionUID = 1L;

	@Column(name = "name")
	private String name;
	
	@Column(name = "is_active")
	private Boolean isActive;

	@Override
	public String getName() {
		return name;
	}

	@Override
	public void setName(String name) {
		this.name = name;
	}

	@Override
	public Boolean getIsActive() {
		return isActive;
	}

	@Override
	public void setIsActive(Boolean isActive) {
		this.isActive = isActive;
	}

}
