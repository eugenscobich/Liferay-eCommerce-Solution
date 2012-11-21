package com.liferay.ecommerce.util.formater;

import java.text.DateFormat;
import java.util.Date;
import java.util.Locale;

public class DateFormaterUtil {

	public static String shortDateFormat(Date date, Locale locale) {
		final DateFormat dateInstance = DateFormat.getDateInstance(DateFormat.SHORT, locale);
		final String format = dateInstance.format(date);
		return format;
	}
}
