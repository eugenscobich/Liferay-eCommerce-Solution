package com.liferay.ecommerce.util.bind;

import java.beans.PropertyEditorSupport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.liferay.ecommerce.admin.service.manufacturer.ManufacturerService;
import com.liferay.ecommerce.model.Manufacturer;

@Component
@Scope(value = ConfigurableBeanFactory.SCOPE_PROTOTYPE)
public class CustomManufacturerPropertyEditor extends PropertyEditorSupport {

	@Autowired
	private ManufacturerService manufacturerService;
	
	@Override
	public String getAsText() {
		if (getValue() != null && getValue() instanceof Manufacturer) {
			return ((Manufacturer) getValue()).getId().toString();
		}
		return getValue() != null ? getValue().toString() : null;
	}

	@Override
	public void setAsText(String text) throws java.lang.IllegalArgumentException {
		if (text != null) {
			Manufacturer manufacturer = manufacturerService.get(Long.parseLong(text));
			setValue(manufacturer);
		}
	}
}
