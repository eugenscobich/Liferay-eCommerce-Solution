package com.liferay.ecommerce.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "language")
public class LanguageImpl extends BaseModelImpl implements Language {

	private static final long serialVersionUID = 1L;

	@Column(name = "code")
	private String code;

	@ManyToOne(targetEntity = StoreImpl.class)
	@JoinTable(name = "store_to_language", joinColumns = { @JoinColumn(name = "language_id") }, inverseJoinColumns = { @JoinColumn(name = "store_id") })
	private Set<Store> stores = new HashSet<Store>();

	@Override
	public String getCode() {
		return code;
	}

	@Override
	public void setCode(String code) {
		this.code = code;
	}

	@Override
	public Set<Store> getStores() {
		return stores;
	}

	@Override
	public void setStores(Set<Store> stores) {
		this.stores = stores;
	}

}
