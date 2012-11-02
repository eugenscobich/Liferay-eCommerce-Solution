package com.liferay.ecommerce.model;

import java.util.Date;

public interface Price {

	Currency getCurrency();

	void setCurrency(Currency currency);

	Double getPrice();

	void setPrice(Double price);

	Double getSpecialPrice();

	void setSpecialPrice(Double specialPrice);

	boolean isEnableSpecial();

	void setEnableSpecial(boolean enableSpecial);

	Date getStartDate();

	void setStartDate(Date startDate);

	Date getEndDate();

	void setEndDate(Date endDate);

}
