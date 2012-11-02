package com.liferay.ecommerce.util.hibernate;

import org.hibernate.cfg.ImprovedNamingStrategy;

public class CustomNamingStrategy extends ImprovedNamingStrategy {
 
	
	private static final long serialVersionUID = 1L;
	
	private static final String PREFIX="ecommerce_";
	
    public String tableName(String tableName) {
        return PREFIX + tableName;
    }

}
