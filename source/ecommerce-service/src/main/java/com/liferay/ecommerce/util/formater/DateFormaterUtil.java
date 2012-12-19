package com.liferay.ecommerce.util.formater;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

public class DateFormaterUtil {

	public static final String WEB_FORMAT = "MM/dd/yyyy";

	public static String shortDateFormat(Date date, Locale locale) {
		final DateFormat dateInstance = DateFormat.getDateInstance(DateFormat.SHORT, locale);
		final String format = dateInstance.format(date);
		return format;
	}

	public static SimpleDateFormat getDateFormatForWeb() {
		final SimpleDateFormat dateFormat = new SimpleDateFormat(WEB_FORMAT);
		dateFormat.setLenient(false);
		return dateFormat;
	}
}
