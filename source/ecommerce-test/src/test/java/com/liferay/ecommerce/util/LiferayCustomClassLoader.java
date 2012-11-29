package com.liferay.ecommerce.util;

import java.net.URL;
import java.net.URLClassLoader;

public class LiferayCustomClassLoader extends URLClassLoader {

	public LiferayCustomClassLoader(URL[] urls) {
		super(urls);
	}

	@SuppressWarnings("rawtypes")
	@Override
	protected synchronized Class<?> loadClass(String name, boolean resolve) throws ClassNotFoundException {
		//System.out.println("Load Class:" + name);
		Class c = findLoadedClass(name);
		//System.out.println("Load Class 1:" + c);
		if (c == null) {
			try {
				c = findClass(name);
				//System.out.println("Load Class 2:" + c);
			} catch (ClassNotFoundException e) {
			}

			if (c == null && getParent() != null) {
				try {
					c = getParent().loadClass(name);
					//System.out.println("Load Class 3:" + c);
				} catch (ClassNotFoundException e) {
				}
			}

			if (c == null) {
				c = findClass(name);
				//System.out.println("Load Class 2:" + c);
			}
		}
		if (resolve) {
			resolveClass(c);
			//System.out.println("Load Class 4:" + c);
		}
		
		return c;

	}

}
