package com.liferay.ecommerce.dao;

import java.io.Serializable;
import java.lang.reflect.ParameterizedType;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

public abstract class BaseDataAccessImpl<T extends Serializable, K extends Serializable> implements BaseDataAccess<K> {

	@PersistenceContext
	public EntityManager entityManager;

	@Override
	public void persist(K entity) {
		entityManager.persist(entity);
	}

	@Override
	public K merge(K entity) {
		return entityManager.merge(entity);
	}

	@Override
	public K find(Long id) {
		return entityManager.find(getEntityClazz(), id);
	}

	@Override
	public List<K> getAll() {
		return entityManager.createQuery("from " + getEntityClazz().getName(), getEntityClazz()).getResultList();
	}

	@Override
	public void remove(K entity) {
		entityManager.remove(entity);
	}

	@SuppressWarnings("unchecked")
	private Class<K> getEntityClazz() {
		ParameterizedType genericSuperclass = (ParameterizedType) getClass().getGenericSuperclass();
		return (Class<K>) genericSuperclass.getActualTypeArguments()[0];
	}
}
