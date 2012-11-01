package com.liferay.ecommerce.model;

import java.io.Serializable;

public interface AdditionalInformation extends Serializable {

	Long getId();

	void setId(Long id);

	String getName();

	void setName(String name);

	String getValue();

	void setValue(String value);

}
