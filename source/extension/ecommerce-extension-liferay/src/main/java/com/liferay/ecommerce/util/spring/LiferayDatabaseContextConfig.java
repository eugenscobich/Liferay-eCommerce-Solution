package com.liferay.ecommerce.util.spring;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.liferay.portal.kernel.util.InfrastructureUtil;

@Configuration
public class LiferayDatabaseContextConfig {

	@Value("${jdbc.default.use.liferay.datasource:false}")
	private String useLiferayDataSource;
	
	public @Bean DataSource liferayDataSource() throws Exception {
		if (!useLiferayDataSource.isEmpty() && Boolean.parseBoolean(useLiferayDataSource)) {
			return InfrastructureUtil.getDataSource();
		}
		return null;
	}
	
}
