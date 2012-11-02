package com.liferay.ecommerce.model;

import com.liferay.ecommerce.model.type.MediaType;

public interface Media {

	MediaType getMediaType();

	void setMediaType(MediaType mediaType);

	String getUrl();

	void setUrl(String url);

}
