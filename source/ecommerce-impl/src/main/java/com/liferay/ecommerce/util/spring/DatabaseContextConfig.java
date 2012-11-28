package com.liferay.ecommerce.util.spring;

import java.sql.SQLException;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.jdbc.datasource.init.DatabasePopulator;
import org.springframework.jdbc.datasource.lookup.JndiDataSourceLookup;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;

@Configuration
public class DatabaseContextConfig {

	@Autowired
	private HibernateJpaVendorAdapter jpaAdapter;

	@Value("${jdbc.default.jndi.name:}")
	private String jndiName;

	@Value("${jdbc.default.url:}")
	private String url;

	@Value("${jdbc.default.driver:}")
	private String driverClassName;

	@Value("${jdbc.default.username:}")
	private String username;

	@Value("${jdbc.default.password:}")
	private String password;

	@Value("${jdbc.default.clean:}")
	private boolean dbClean;

	@Autowired
	@Qualifier("liferayDataSource")
	private DataSource liferayDataSource;

	@Autowired
	private DatabasePopulator databasePopulator;

	@SuppressWarnings("deprecation")
	public @Bean
	LocalContainerEntityManagerFactoryBean entityManagerFactory() throws SQLException {
		LocalContainerEntityManagerFactoryBean entityManagerFactoryBean = new LocalContainerEntityManagerFactoryBean();
		entityManagerFactoryBean.setJpaVendorAdapter(jpaAdapter);
		entityManagerFactoryBean.setPersistenceUnitName("ecommercePersistenceUnit");
		DataSource dataSource = null;
		if (!jndiName.isEmpty()) {
			JndiDataSourceLookup jndiDataSourceLookup = new JndiDataSourceLookup();
			jndiDataSourceLookup.setResourceRef(true);
			dataSource = jndiDataSourceLookup.getDataSource(jndiName);
		} else if (!url.isEmpty() && !driverClassName.isEmpty()) {
			dataSource = new DriverManagerDataSource(driverClassName, url, username, password);
		} else if (liferayDataSource != null) {
			dataSource = liferayDataSource;
		}
		if (dbClean) {
			databasePopulator.populate(dataSource.getConnection());
		}
		entityManagerFactoryBean.setDataSource(dataSource);
		return entityManagerFactoryBean;
	}
}
