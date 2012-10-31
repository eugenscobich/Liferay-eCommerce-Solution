package com.liferay.ecommerce.dao;

import java.io.Serializable;
import java.util.List;

public interface BaseDataAccess<K extends Serializable> {

	void persist(K entity);

	K find(Long id);

	List<K> getAll();

	K merge(K entity);

	void remove(K entity);

}
