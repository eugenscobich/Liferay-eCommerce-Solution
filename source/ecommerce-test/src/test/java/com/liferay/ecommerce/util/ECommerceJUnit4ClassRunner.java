package com.liferay.ecommerce.util;

import java.io.File;
import java.lang.reflect.Method;
import java.net.URI;
import java.net.URL;
import java.net.URLClassLoader;
import java.security.AccessController;
import java.security.PrivilegedAction;
import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;
import org.junit.runners.model.InitializationError;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@SuppressWarnings("deprecation")
public class ECommerceJUnit4ClassRunner extends SpringJUnit4ClassRunner {

	private static final Logger LOG = Logger.getLogger(ECommerceJUnit4ClassRunner.class);

	static {
		LOG.info("Start initialization Liferay");

		try {

			URI libFolder = ECommerceJUnit4ClassRunner.class.getResource("/lib").toURI();
			final List<URL> urls = new ArrayList<URL>();
			for (File f : new File(libFolder).listFiles()) {
				urls.add(f.toURI().toURL());
			}

			ClassLoader classloader = AccessController.doPrivileged(new PrivilegedAction<URLClassLoader>() {
				@Override
				public URLClassLoader run() {
					return new URLClassLoader(urls.toArray(new URL[urls.size()]));
				}
			});

			Thread.currentThread().setContextClassLoader(classloader);
			Class clazz = classloader.loadClass("com.liferay.portal.util.InitUtil");
			Method main = clazz.getMethod("initWithSpring");
			main.invoke(null);
		} catch (Exception e) {
			LOG.error(e, e);
		}
		// InitUtil.initWithSpring();
		LOG.info("Finish initialization Liferay");
	}

	public ECommerceJUnit4ClassRunner(Class<?> clazz) throws InitializationError {
		super(clazz);
		LOG.info("ECommerceJUnit4ClassRunner constructor called with [" + clazz + "].");
	}
}
