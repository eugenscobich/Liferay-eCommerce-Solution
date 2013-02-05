package com.liferay.ecommerce.dao.catalog;

import java.util.List;

import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import com.liferay.ecommerce.dao.BaseDataAccessImpl;
import com.liferay.ecommerce.model.Catalog;
import com.liferay.ecommerce.model.CatalogImpl;

@Repository
public class CatalogDataAccessImpl extends BaseDataAccessImpl<CatalogImpl, Catalog> implements CatalogDataAccess {

	@Override
	public List<Catalog> getCatalogsForPage(Long storeId, Integer page, Integer rows, Long languageId) {
		TypedQuery<Catalog> query = entityManager.createNamedQuery("Catalog.findAll", Catalog.class);
		query.setParameter("storeId", storeId);
		query.setParameter("languageId", languageId);
		query.setFirstResult((page - 1) * rows);
		query.setMaxResults(rows);
		return query.getResultList();
	}

	@Override
	public Long getNumberOfCatalogs(Long storeId) {
		TypedQuery<Long> query = entityManager.createNamedQuery("Catalog.totalNumber", Long.class);
		query.setParameter("storeId", storeId);
		return query.getSingleResult();
	}

	@Override
	public List<Catalog> getCatalogChildren(Long parentId, Long languageId) {
		TypedQuery<Catalog> query = entityManager.createNamedQuery("Catalog.getCatalogChildren", Catalog.class);
		query.setParameter("languageId", languageId);
		query.setParameter("parentId", parentId);
		return query.getResultList();
	}

	@Override
	public List<Catalog> getAllCatalogs(Long storeId, Long languageId) {
		TypedQuery<Catalog> query = entityManager.createNamedQuery("Catalog.findAll", Catalog.class);
		query.setParameter("storeId", storeId);
		query.setParameter("languageId", languageId);
		return query.getResultList();
	}

	@Override
	public List<Catalog> getAllActiveCatalogs(Long storeId, Long languageId) {
		TypedQuery<Catalog> query = entityManager.createNamedQuery("Catalog.findAllActive", Catalog.class);
		query.setParameter("storeId", storeId);
		query.setParameter("languageId", languageId);
		return query.getResultList();
	}

	@Override
	public List<Catalog> getActiveCatalogChildren(Long parentId, Long languageId) {
		TypedQuery<Catalog> query = entityManager.createNamedQuery("Catalog.getActiveCatalogChildren", Catalog.class);
		query.setParameter("languageId", languageId);
		query.setParameter("parentId", parentId);
		return query.getResultList();
	}

}
