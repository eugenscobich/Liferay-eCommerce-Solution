package com.liferay.ecommerce.service.plugin;

public interface PluginService {

	<T> T getSystemBean(Class<T> clazz);

}
