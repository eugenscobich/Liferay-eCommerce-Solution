package com.liferay.ecommerce.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;

import com.liferay.ecommerce.model.type.MediaType;

@Entity
@Table(name = "media")
public class MediaImpl extends BaseModelImpl implements Media {

	private static final long serialVersionUID = 1L;

	@Column(name = "media_type")
	@Enumerated(EnumType.STRING)
	private MediaType mediaType;

	@Column(name = "url")
	private String url;

	@Override
	public MediaType getMediaType() {
		return mediaType;
	}

	@Override
	public void setMediaType(MediaType mediaType) {
		this.mediaType = mediaType;
	}

	@Override
	public String getUrl() {
		return url;
	}

	@Override
	public void setUrl(String url) {
		this.url = url;
	}

}
