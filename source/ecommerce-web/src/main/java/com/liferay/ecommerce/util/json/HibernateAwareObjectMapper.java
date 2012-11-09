package com.liferay.ecommerce.util.json;

import org.springframework.stereotype.Component;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.hibernate4.Hibernate4Module;

@Component
public class HibernateAwareObjectMapper extends ObjectMapper {

	private static final long serialVersionUID = 1L;

	public HibernateAwareObjectMapper() {
		Hibernate4Module hm = new Hibernate4Module();
		registerModule(hm);
		// configure(Feature.FORCE_LAZY_LOADING, false);
	}
	/*
	 * public void setPrettyPrint(boolean prettyPrint) {
	 * configure(Feature.INDENT_OUTPUT, prettyPrint); }
	 */
}
