package com.liferay.ecommerce.util;

import com.liferay.ecommerce.model.Store;

public class ServiceUtil {

	public static void validateStore(Store store) {
		if (store == null || store.getId() == null) {
			throw new IllegalArgumentException("The Store object is invalid for this action");
		}
	}

}
