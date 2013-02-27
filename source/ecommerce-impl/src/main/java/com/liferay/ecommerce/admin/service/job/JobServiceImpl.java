package com.liferay.ecommerce.admin.service.job;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.liferay.ecommerce.admin.service.extension.ExtensionService;
import com.liferay.ecommerce.admin.service.job.JobService;

@Service
public class JobServiceImpl implements JobService {

	@Autowired
	private ExtensionService extensionService;
	

	@Override
	public void checkExtension() {
		extensionService.checkExtension();
	}
	
}
