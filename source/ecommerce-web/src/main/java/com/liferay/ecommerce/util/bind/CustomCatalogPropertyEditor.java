package com.liferay.ecommerce.util.bind;

import java.beans.PropertyEditorSupport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.liferay.ecommerce.model.Catalog;
import com.liferay.ecommerce.service.catalog.CatalogService;

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
		if (text != null) {
			Catalog manufacturer = catalogService.get(Long.parseLong(text));
			setValue(manufacturer);
		}
	}
}
