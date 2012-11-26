package com.liferay.ecommerce.dao.product;

import java.util.List;

import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import com.liferay.ecommerce.dao.BaseDataAccessImpl;
import com.liferay.ecommerce.model.Product;
import com.liferay.ecommerce.model.ProductImpl;

@Repository
public class ProductDataAccessImpl extends BaseDataAccessImpl<ProductImpl, Product> implements ProductDataAccess {

	@Override
	public List<Product> getProductsForPage(Long storeId, Integer page, Integer rows, Long languageId) {
		TypedQuery<Product> query = entityManager.createNamedQuery("Product.findAll", Product.class);
		query.setParameter("storeId", storeId);
		query.setParameter("languageId", languageId);
		query.setFirstResult((page - 1) * rows);
		query.setMaxResults(rows);
		return query.getResultList();
	}

	@Override
	public Long getNumberOfProducts(Long storeId) {
		TypedQuery<Long> query = entityManager.createNamedQuery("Product.totalNumber", Long.class);
		query.setParameter("storeId", storeId);
		return query.getSingleResult();
	}

}
