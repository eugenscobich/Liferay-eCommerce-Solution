package com.liferay.ecommerce.util.bind;

import java.beans.PropertyEditorSupport;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.liferay.ecommerce.admin.service.catalog.CatalogService;
import com.liferay.ecommerce.model.Catalog;

@Component
@Scope(value = ConfigurableBeanFactory.SCOPE_PROTOTYPE)
public class CustomCatalogPropertyEditor extends PropertyEditorSupport {

	@Autowired
	private CatalogService catalogService;

	@Override
	public String getAsText() {
		if (getValue() != null && getValue() instanceof Catalog) {
			return ((Catalog) getValue()).getId().toString();
		}
		return getValue() != null ? getValue().toString() : null;
	}

	@Override
	public void setAsText(String text) throws java.lang.IllegalArgumentException {
		if (!StringUtils.isEmpty(text)) {
			Catalog manufacturer = catalogService.get(Long.parseLong(text));
			setValue(manufacturer);
		}
	}
}
