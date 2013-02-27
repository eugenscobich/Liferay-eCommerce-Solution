package com.liferay.ecommerce.model;


public interface Store extends BaseModel {

	String getName();

	void setName(String name);

	Boolean getIsActive();

	void setIsActive(Boolean isActive);

}
