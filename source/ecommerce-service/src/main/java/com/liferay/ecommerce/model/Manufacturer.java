package com.liferay.ecommerce.model;

import java.util.Set;

public interface Manufacturer extends BaseModel {

	String getName();

	void setName(String name);

	String getDescription();

	void setDescription(String description);

	Media getMedia();

	void setMedia(Media media);

	Set<Store> getStores();

	void setStores(Set<Store> stores);

}
