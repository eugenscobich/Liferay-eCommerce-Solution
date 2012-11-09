package com.liferay.ecommerce.util;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import org.springframework.context.MessageSource;
import org.springframework.validation.FieldError;

public class JsonUtil {
	public static Map<String, Object> getPaginationData(List<?> objects, Long total) {
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("total", total);
		result.put("rows", objects);
		return result;
	}

	public static Map<String, Object> sendError(List<FieldError> errors, MessageSource messageSource, Locale locale) {
		List<Map<String, Object>> errorsMap = new ArrayList<Map<String, Object>>();
		for (FieldError fieldError : errors) {
			Map<String, Object> map = new HashMap<String, Object>();
			map.put("field", fieldError.getField());
			map.put("message", messageSource.getMessage(fieldError.getCode(), null, locale));
			errorsMap.add(map);
		}
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("errors", errorsMap);
		return result;
	}

	public static Map<String, Object> sendSuccess() {
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("success", true);
		return result;
	}
}
