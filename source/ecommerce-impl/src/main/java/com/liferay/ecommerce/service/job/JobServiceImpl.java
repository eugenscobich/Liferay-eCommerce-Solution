package com.liferay.ecommerce.service.job;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.liferay.ecommerce.service.extension.ExtensionService;

@Service
public class JobServiceImpl implements JobService {

	@Autowired
	private ExtensionService extensionService;
	

	@Override
	public void checkExtension() {
		extensionService.checkExtension();
	}
	
}
