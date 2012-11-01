package com.liferay.ecommerce.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.MappedSuperclass;
import javax.persistence.OneToMany;

@MappedSuperclass
public abstract class BaseModelImpl implements BaseModel {

	protected static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue
	private Long id;

	@OneToMany(cascade = CascadeType.ALL, targetEntity = AdditionalInformationImpl.class)
	@JoinColumn(name = "model_id")
	private List<AdditionalInformation> additionalInformations;

	@Override
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	@Override
	public List<AdditionalInformation> getAdditionalInformations() {
		return additionalInformations;
	}

	@Override
	public void setAdditionalInformations(List<AdditionalInformation> additionalInformations) {
		this.additionalInformations = additionalInformations;
	}

}
