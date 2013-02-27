package com.liferay.ecommerce.admin.service.extension;

import java.io.File;
import java.lang.reflect.Method;
import java.net.URL;
import java.net.URLClassLoader;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Service;

import com.liferay.ecommerce.admin.service.extension.ExtensionService;

@Service
public class ExtensionServiceImpl implements ExtensionService {

	private static Logger LOG = Logger.getLogger(ExtensionServiceImpl.class);

	@Value("${extensions.location.relative.path}")
	private String exstationRelativeLoactionPath;

	@Autowired
	private ApplicationContext applicationContext;


	@Override
	public void checkExtension() {
		LOG.error("aaa");
	}

	@SuppressWarnings("deprecation")
	public static void addPath(File file) throws Exception {
		URL u = file.toURL();
		URLClassLoader urlClassLoader = (URLClassLoader) ClassLoader.getSystemClassLoader();
		Class<URLClassLoader> urlClass = URLClassLoader.class;
		Method method = urlClass.getDeclaredMethod("addURL", new Class[] { URL.class });
		method.setAccessible(true);
		method.invoke(urlClassLoader, new Object[] { u });
	}

}
