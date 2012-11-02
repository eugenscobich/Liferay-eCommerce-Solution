package com.liferay.ecommerce.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.Type;

@Entity
@Table(name = "manufacturer")
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

}
