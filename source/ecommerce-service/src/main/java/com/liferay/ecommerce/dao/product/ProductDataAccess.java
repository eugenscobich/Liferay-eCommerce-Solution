package com.liferay.ecommerce.dao.product;

import java.util.List;

import com.liferay.ecommerce.dao.BaseDataAccess;
import com.liferay.ecommerce.model.Product;

public interface ProductDataAccess extends BaseDataAccess<Product> {

	List<Product> getProductsForPage(Long storeId, Integer page, Integer rows);

	Long getNumberOfProducts(Long storeId);

}
