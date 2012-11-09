package com.liferay.ecommerce.util.json;

import java.lang.reflect.Method;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ExtendedModelMap;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.annotation.ModelAndViewResolver;
import org.springframework.web.servlet.view.json.MappingJackson2JsonView;

public class JsonModelAndViewResolver implements ModelAndViewResolver {

	@Autowired
	private HibernateAwareObjectMapper hibernateAwareObjectMapper;

	@SuppressWarnings("rawtypes")
	@Override
	public ModelAndView resolveModelAndView(Method handlerMethod, Class handlerType, Object returnValue, ExtendedModelMap implicitModel, NativeWebRequest webRequest) {

		if (handlerMethod.getAnnotation(ResponseBody.class) != null) {
			ModelAndView mav = new ModelAndView();
			MappingJackson2JsonView mappingJacksonJsonView = new MappingJackson2JsonView();
			mappingJacksonJsonView.setObjectMapper(hibernateAwareObjectMapper);
			//mappingJacksonJsonView.setBeanName("result");
			mappingJacksonJsonView.setExtractValueFromSingleKeyModel(true);
			mav.setView(mappingJacksonJsonView);
			mav.addObject(returnValue);
			//mav.addObject("result", returnValue);
			return mav;
		}

		return UNRESOLVED;
	}
}
