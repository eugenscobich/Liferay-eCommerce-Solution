package com.liferay.ecommerce.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "store")
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
