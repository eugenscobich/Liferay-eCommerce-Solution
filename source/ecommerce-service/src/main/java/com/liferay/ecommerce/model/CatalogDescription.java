package com.liferay.ecommerce.model;

public interface CatalogDescription {

	Language getLanguage();

	void setLanguage(Language locale);

	String getName();

	void setName(String name);

	String getDescription();

	void setDescription(String description);

	Boolean getIsDefault();

	void setIsDefault(Boolean isDefault);

}
