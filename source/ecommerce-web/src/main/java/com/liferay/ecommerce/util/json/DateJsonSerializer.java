package com.liferay.ecommerce.util.json;

import java.io.IOException;
import java.util.Date;
import java.util.Locale;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.liferay.ecommerce.util.formater.DateFormaterUtil;

public class DateJsonSerializer extends JsonSerializer<Date> {

	private Locale locale;

	public DateJsonSerializer(Locale locale) {
		this.locale = locale;
	}

	@Override
	public void serialize(Date value, JsonGenerator jgen, SerializerProvider provider) throws IOException, JsonProcessingException {
		jgen.writeObject(DateFormaterUtil.shortDateFormat(value, this.locale));
	}

	public Class<Date> handledType() {
		return Date.class;
	}
}
