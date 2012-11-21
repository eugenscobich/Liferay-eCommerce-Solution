package com.liferay.ecommerce.util.json;

import java.lang.reflect.Method;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.ui.ExtendedModelMap;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.annotation.ModelAndViewResolver;
import org.springframework.web.servlet.view.json.MappingJackson2JsonView;

import com.fasterxml.jackson.core.Version;
import com.fasterxml.jackson.databind.Module;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.module.SimpleModule;
import com.fasterxml.jackson.datatype.hibernate4.Hibernate4Module;

public class JsonModelAndViewResolver implements ModelAndViewResolver {

	@Autowired
	private MessageSource messageSource;

	@SuppressWarnings("rawtypes")
	@Override
	public ModelAndView resolveModelAndView(Method handlerMethod, Class handlerType, Object returnValue, ExtendedModelMap implicitModel, NativeWebRequest webRequest) {

		if (handlerMethod.getAnnotation(ResponseBody.class) != null) {
			ModelAndView mav = new ModelAndView();
			MappingJackson2JsonView mappingJacksonJsonView = new MappingJackson2JsonView();
			ObjectMapper objectMapper = new ObjectMapper();
			objectMapper.registerModule(getHibernateModule(webRequest));
			objectMapper.registerModule(getEnumModule(webRequest));
			objectMapper.registerModule(getDateModule(webRequest));
			mappingJacksonJsonView.setObjectMapper(objectMapper);
			mappingJacksonJsonView.setExtractValueFromSingleKeyModel(true);
			mav.setView(mappingJacksonJsonView);
			mav.addObject(returnValue);
			return mav;
		}

		return UNRESOLVED;
	}

	private Module getDateModule(NativeWebRequest webRequest) {
		SimpleModule simpleModule = new SimpleModule("DateModule", new Version(1, 0, 0, null, null, null));
		simpleModule.addSerializer(new DateJsonSerializer(webRequest.getLocale()));
		return simpleModule;
	}

	private Module getEnumModule(NativeWebRequest webRequest) {
		SimpleModule simpleModule = new SimpleModule("EnumModule", new Version(1, 0, 0, null, null, null));
		simpleModule.addSerializer(new EnumJsonSerializer(messageSource, webRequest.getLocale()));
		return simpleModule;
	}

	private Module getHibernateModule(NativeWebRequest webRequest) {
		return new Hibernate4Module();
	}
}
