package com.liferay.ecommerce.service.product;

import java.util.List;

import com.liferay.ecommerce.model.Product;
import com.liferay.ecommerce.model.Store;

public interface ProductService {

	List<Product> getProductsForPage(Store store, Integer page, Integer rows);

	Long getNumberOfProducts(Store store);

}
