package com.liferay.ecommerce.model;

public interface ProductDescription {

	Language getLanguage();

	void setLanguage(Language language);

	String getName();

	void setName(String name);

	String getDescription();

	void setDescription(String description);

	Boolean getIsDefault();

	void setIsDefault(Boolean isDefault);

}
