package com.liferay.ecommerce.util;

import java.sql.SQLException;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.init.DatabasePopulator;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;

import com.liferay.portal.kernel.util.InfrastructureUtil;

@Configuration
public class LiferayDatabaseContextTestConfig {
	@Autowired
	private HibernateJpaVendorAdapter jpaAdapter;

	@Autowired
	private DatabasePopulator databasePopulator;

	public @Bean
	LocalContainerEntityManagerFactoryBean entityManagerFactory() throws SQLException {
		LocalContainerEntityManagerFactoryBean entityManagerFactoryBean = new LocalContainerEntityManagerFactoryBean();
		entityManagerFactoryBean.setJpaVendorAdapter(jpaAdapter);
		entityManagerFactoryBean.setPersistenceUnitName("ecommercePersistenceUnit");
		DataSource dataSource = InfrastructureUtil.getDataSource();
		databasePopulator.populate(dataSource.getConnection());

		entityManagerFactoryBean.setDataSource(dataSource);
		return entityManagerFactoryBean;
	}
}
