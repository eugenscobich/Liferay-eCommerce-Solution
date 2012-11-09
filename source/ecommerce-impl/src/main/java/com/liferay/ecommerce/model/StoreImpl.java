package com.liferay.ecommerce.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

@Entity(name = "Store")
@Table(name = "store")
@NamedQueries({ @NamedQuery(name = "Store.getAllStores", query = "SELECT s FROM Store s") })
public class StoreImpl extends BaseModelImpl implements Store {

	private static final long serialVersionUID = 1L;

	@Column(name = "name")
	private String name;

	@Override
	public String getName() {
		return name;
	}

	@Override
	public void setName(String name) {
		this.name = name;
	}

}
