package com.liferay.ecommerce.service.product;

import java.util.List;

import com.liferay.ecommerce.model.Language;
import com.liferay.ecommerce.model.Product;
import com.liferay.ecommerce.model.Store;

public interface ProductService {

	List<Product> getProductsForPage(Store store, Integer page, Integer rows, Language language);

	Long getNumberOfProducts(Store store);

	Product getNewProduct(Store store);

	Product get(Long productId);

	Product getForEdit(Long productId);

	void save(Product product);

}
