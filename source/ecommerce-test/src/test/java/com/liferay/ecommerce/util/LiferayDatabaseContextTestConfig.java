package com.liferay.ecommerce.util;

import java.sql.SQLException;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;

import com.liferay.portal.kernel.util.InfrastructureUtil;

@Configuration
public class LiferayDatabaseContextTestConfig {
	@Autowired
	private HibernateJpaVendorAdapter jpaAdapter;
	
	public @Bean
	LocalContainerEntityManagerFactoryBean entityManagerFactory() throws SQLException {
		LocalContainerEntityManagerFactoryBean entityManagerFactoryBean = new LocalContainerEntityManagerFactoryBean();
		entityManagerFactoryBean.setJpaVendorAdapter(jpaAdapter);
		entityManagerFactoryBean.setPersistenceUnitName("ecommercePersistenceUnit");
		entityManagerFactoryBean.setDataSource(dataSource());
		return entityManagerFactoryBean;
	}
	
	public @Bean
	DataSource dataSource() throws SQLException {
		DataSource dataSource = InfrastructureUtil.getDataSource();
		return dataSource;
	}
}
