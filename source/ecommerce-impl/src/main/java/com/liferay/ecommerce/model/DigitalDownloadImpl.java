package com.liferay.ecommerce.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "digital_download")
public class DigitalDownloadImpl extends BaseModelImpl implements DigitalDownload {

	private static final long serialVersionUID = 1L;

	@Column(name = "url")
	private String url;

	@Override
	public String getUrl() {
		return url;
	}

	@Override
	public void setUrl(String url) {
		this.url = url;
	}
	
}
