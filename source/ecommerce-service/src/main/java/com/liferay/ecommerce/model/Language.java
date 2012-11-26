package com.liferay.ecommerce.model;

import java.util.Set;

public interface Language extends BaseModel {

	String getCode();

	void setCode(String code);

	Set<Store> getStores();

	void setStores(Set<Store> stores);

}
