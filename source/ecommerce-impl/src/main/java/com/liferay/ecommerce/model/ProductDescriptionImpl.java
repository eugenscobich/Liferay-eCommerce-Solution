package com.liferay.ecommerce.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.Type;

@Entity
@Table(name = "product_description")
public class ProductDescriptionImpl extends BaseModelImpl implements ProductDescription {

	private static final long serialVersionUID = 1L;

	@ManyToOne(targetEntity = LanguageImpl.class)
	@JoinColumn(name = "language_id")
	private Language language;

	@Column(name = "name")
	private String name;

	@Column(name = "description")
	@Type(type = "text")
	private String description;

	@Override
	public Language getLanguage() {
		return language;
	}

	@Override
	public void setLanguage(Language language) {
		this.language = language;
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
