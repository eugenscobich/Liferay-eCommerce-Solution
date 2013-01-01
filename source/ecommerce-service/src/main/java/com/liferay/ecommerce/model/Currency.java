package com.liferay.ecommerce.model;

import java.util.Set;

public interface Currency extends BaseModel {

	String getCode();

	void setCode(String code);

	Set<Store> getStores();

	void setStores(Set<Store> stores);

	Boolean getIsDefault();

	void setIsDefault(Boolean isDefault);

}
