package com.liferay.ecommerce.model;

import java.io.Serializable;
import java.util.List;

public interface BaseModel extends Serializable {
	Long getId();

	List<AdditionalInformation> getAdditionalInformations();

	void setAdditionalInformations(List<AdditionalInformation> additionalInformations);
}
