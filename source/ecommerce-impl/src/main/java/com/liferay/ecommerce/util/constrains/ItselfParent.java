package com.liferay.ecommerce.util.constrains;

import static java.lang.annotation.ElementType.ANNOTATION_TYPE;
import static java.lang.annotation.ElementType.TYPE;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

import java.lang.annotation.Documented;
import java.lang.annotation.Retention;
import java.lang.annotation.Target;

import javax.validation.Constraint;
import javax.validation.Payload;

/**
 * Validation annotation to validate that checked field have the same value with
 * self object.
 * 
 * Example, compare parent field:
 * 
 * ItselfParent(checkField = "parent", message = "The parent can not be itself")
 * 
 */
@Target({ TYPE, ANNOTATION_TYPE })
@Retention(RUNTIME)
@Constraint(validatedBy = ItselfParentValidator.class)
@Documented
public @interface ItselfParent {
	String message() default "{javax.validation.constraints.ItselfParent.message}";

	Class<?>[] groups() default {};

	Class<? extends Payload>[] payload() default {};

	/**
	 * @return The check field
	 */
	String checkField();

	/**
	 * Defines several <code>@ItselfParent</code> annotations on the same
	 * element
	 * 
	 * @see ItselfParent
	 */
	@Target({ TYPE, ANNOTATION_TYPE })
	@Retention(RUNTIME)
	@Documented
	@interface List {
		ItselfParent[] value();
	}
}