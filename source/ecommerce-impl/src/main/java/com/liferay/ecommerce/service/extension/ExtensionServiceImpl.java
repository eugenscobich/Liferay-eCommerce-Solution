package com.liferay.ecommerce.service.extension;

import java.io.File;
import java.io.IOException;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Service;

@Service
public class ExtensionServiceImpl implements ExtensionService {

	private static Logger LOG = Logger.getLogger(ExtensionServiceImpl.class);

	@Value("${extensions.location.relative.path}")
	private String exstationRelativeLoactionPath;

	@Autowired
	private ApplicationContext applicationContext;

	@Override
	public void checkExtension() {
		LOG.info("Run check extension");
		String files;
		File folder = null;
		try {
			folder = applicationContext.getResource(exstationRelativeLoactionPath).getFile();
		} catch (IOException e) {
			LOG.error(e, e);
		}
		File[] listOfFiles = folder.listFiles();

	}

}
