package com.liferay.ecommerce.model;

import java.util.Date;

import com.liferay.ecommerce.model.type.ProductStatus;
import com.liferay.ecommerce.model.type.ProductType;

public interface ProductDetails {

	ProductStatus getProductStatus();

	void setProductStatus(ProductStatus productStatus);

	String getSku();

	void setSku(String sku);

	ProductType getProductType();

	void setProductType(ProductType productType);

	Date getAvailableDate();

	void setAvailableDate(Date availableDate);

	Date getExpiryDate();

	void setExpiryDate(Date expiryDate);

	boolean isInvisible();

	void setInvisible(boolean invisible);

	Manufacturer getManufacturer();

	void setManufacturer(Manufacturer manufacturer);

	String getModel();

	void setModel(String model);

	Long getQuantity();

	void setQuantity(Long quantity);

	Double getWeight();

	void setWeight(Double weight);

	Float getRating();

	void setRating(Float rating);

	Date getCreateDate();

	void setCreateDate(Date createDate);

	Date getLastModifiedDate();

	void setLastModifiedDate(Date lastModifiedDate);

}
