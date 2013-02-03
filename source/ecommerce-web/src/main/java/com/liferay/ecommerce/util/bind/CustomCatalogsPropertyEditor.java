package com.liferay.ecommerce.util.bind;

import java.beans.PropertyEditorSupport;
import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.liferay.ecommerce.model.Catalog;
import com.liferay.ecommerce.service.catalog.CatalogService;

@Component
@Scope(value = ConfigurableBeanFactory.SCOPE_PROTOTYPE)
public class CustomCatalogsPropertyEditor extends PropertyEditorSupport {

	@Autowired
	private CatalogService catalogService;

	@SuppressWarnings("rawtypes")
	@Override
	public String getAsText() {
		if (getValue() != null && getValue() instanceof List) {
			List items = (List)getValue();
			if (!items.isEmpty()) {
				String result = "";
				for (Object item : items) {
					if (item != null && item instanceof Catalog) {
						result += ((Catalog) item).getId() + ",";
					}
				}
				return result.substring(0, result.length() - 1);
			} else {
				return null;
			}
		}
		return getValue() != null ? getValue().toString() : null;
	}

	@Override
	public void setAsText(String text) throws java.lang.IllegalArgumentException {
		if (!StringUtils.isEmpty(text)) {
			String[] catalogIdsStr = text.split(",");
			List<Catalog> catalogs = new ArrayList<Catalog>();
			for (String idStr : catalogIdsStr) {
				Catalog catalog = catalogService.get(Long.parseLong(idStr));
				catalogs.add(catalog);
			}
			setValue(catalogs);
		}
	}
}
