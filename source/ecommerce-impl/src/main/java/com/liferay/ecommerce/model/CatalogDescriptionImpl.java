package com.liferay.ecommerce.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Type;

@Entity
@Table(name = "catalog_description")
public class CatalogDescriptionImpl extends BaseModelImpl implements CatalogDescription {

	private static final long serialVersionUID = 1L;

	@Column(name = "locale")
	private String locale;

	@Column(name = "name")
	private String name;

	@Column(name = "description")
	@Type(type = "text")
	private String description;

	@Override
	public String getLocale() {
		return locale;
	}

	@Override
	public void setLocale(String locale) {
		this.locale = locale;
	}

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

}
