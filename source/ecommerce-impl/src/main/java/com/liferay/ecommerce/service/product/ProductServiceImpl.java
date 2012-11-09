package com.liferay.ecommerce.service.product;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.liferay.ecommerce.dao.product.ProductDataAccess;
import com.liferay.ecommerce.model.Product;
import com.liferay.ecommerce.model.Store;
import com.liferay.ecommerce.util.ServiceUtil;

@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	private ProductDataAccess productDataAccess;

	@Override
	public List<Product> getProductsForPage(Store store, Integer page, Integer rows) {
		ServiceUtil.validateStore(store);
		return productDataAccess.getProductsForPage(store.getId(), page, rows);
	}

	@Override
	public Long getNumberOfProducts(Store store) {
		ServiceUtil.validateStore(store);
		return productDataAccess.getNumberOfProducts(store.getId());
	}
}
