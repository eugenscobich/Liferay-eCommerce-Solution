package com.liferay.ecommerce.util.constrains;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import org.apache.commons.beanutils.PropertyUtils;

public class ItselfParentValidator implements ConstraintValidator<ItselfParent, Object> {
	private String checkFieldName;
	private String message;

	@Override
	public void initialize(final ItselfParent constraintAnnotation) {
		checkFieldName = constraintAnnotation.checkField();
		message = constraintAnnotation.message();
	}

	@Override
	public boolean isValid(final Object value, final ConstraintValidatorContext context) {
		try {

			final Object checkField = PropertyUtils.getProperty(value, checkFieldName);
			boolean neitherSet = (value == null) && (checkField == null);

			if (neitherSet) {
				return true;
			}

			boolean matches = (checkField != null) && !checkField.equals(value);

			if (!matches) {
				context.disableDefaultConstraintViolation();
				context.buildConstraintViolationWithTemplate(message).addNode(checkFieldName).addConstraintViolation();
				return false;
			}
		} catch (final Exception ignore) {
			// ignore
		}
		return true;
	}
}
