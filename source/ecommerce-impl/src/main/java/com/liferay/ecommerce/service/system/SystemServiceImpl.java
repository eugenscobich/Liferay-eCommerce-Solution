package com.liferay.ecommerce.service.system;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

@Service
@Scope("singleton")
public class SystemServiceImpl implements SystemService {
	private String webApplicationContextAbsolutePath;

	@Override
	public String getWebApplicationContextAbsolutePath() {
		return webApplicationContextAbsolutePath;
	}

	public void setWebApplicationContextAbsolutePath(String webApplicationContextAbsolutePath) {
		this.webApplicationContextAbsolutePath = webApplicationContextAbsolutePath;
	}
}
