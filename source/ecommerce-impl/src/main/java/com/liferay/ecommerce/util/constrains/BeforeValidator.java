package com.liferay.ecommerce.util.constrains;

import java.util.Date;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class BeforeValidator implements ConstraintValidator<Before, Date> {

	@Override
	public void initialize(Before constraintAnnotation) {
		// TODO Auto-generated method stub

	}

	@Override
	public boolean isValid(Date value, ConstraintValidatorContext context) {
		// TODO Auto-generated method stub
		return false;
	}

}
