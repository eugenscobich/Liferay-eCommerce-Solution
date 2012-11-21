package com.liferay.ecommerce.util.json;

import java.io.IOException;
import java.util.Locale;

import org.springframework.context.MessageSource;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;

@SuppressWarnings("rawtypes")
public class EnumJsonSerializer extends JsonSerializer<Enum> {

	private Locale locale;
	private MessageSource messageSource;

	public EnumJsonSerializer(MessageSource messageSource, Locale locale) {
		this.messageSource = messageSource;
		this.locale = locale;
	}

	@Override
	public void serialize(Enum value, JsonGenerator jgen, SerializerProvider provider) throws IOException, JsonProcessingException {
		jgen.writeObject(this.messageSource.getMessage(value.getClass().getName() + "." + value.toString(), null, this.locale));
	}

	public Class<Enum> handledType() {
		return Enum.class;
	}
}
