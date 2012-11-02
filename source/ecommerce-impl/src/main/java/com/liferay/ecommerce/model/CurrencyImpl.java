package com.liferay.ecommerce.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "currency")
public class CurrencyImpl extends BaseModelImpl implements Currency {

	private static final long serialVersionUID = 1L;

	@Column(name = "code")
	private String code;

	@Override
	public String getCode() {
		return code;
	}

	@Override
	public void setCode(String code) {
		this.code = code;
	}

}
