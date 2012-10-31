package com.liferay.ecommerce.model;

import java.io.Serializable;

public interface Store extends Serializable {

	long getId();

	String getName();

	void setName(String name);

}
