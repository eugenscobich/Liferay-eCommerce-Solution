package com.liferay.ecommerce.service.plugin;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

@Service
public class PluginServiceImpl implements PluginService {

	@Autowired
	private ApplicationContext applicationContext;

	@Override
	public <T> T getSystemBean(Class<T> clazz) {
		Map<String, T> beanOfTypes = applicationContext.getBeansOfType(clazz);
		for (String beanName : beanOfTypes.keySet()) {
			T bean = beanOfTypes.get(beanName);
			if (bean.getClass().getAnnotation(Primary.class) == null) {
				return bean;
			}
		}
		return null;
	}
}
