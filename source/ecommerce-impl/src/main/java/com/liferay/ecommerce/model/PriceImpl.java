package com.liferay.ecommerce.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.format.annotation.NumberFormat;
import org.springframework.format.annotation.NumberFormat.Style;

@Entity
@Table(name = "price")
public class PriceImpl extends BaseModelImpl implements Price {

	private static final long serialVersionUID = 1L;

	@ManyToOne(targetEntity = CurrencyImpl.class)
	@JoinColumn(name = "currency_id")
	private Currency currency;

	@Column(name = "price")
	@NumberFormat(style = Style.CURRENCY)
	private Double price;

	@Column(name = "special_price")
	@NumberFormat(style = Style.CURRENCY)
	private Double specialPrice;

	@Column(name = "is_enabled_special_price")
	private Boolean isEnabledSpecialPrice;

	@Column(name = "start_date")
	@Temporal(TemporalType.TIMESTAMP)
	private Date startDate;

	@Column(name = "end_date")
	@Temporal(TemporalType.TIMESTAMP)
	private Date endDate;

	@Column(name = "is_default")
	private Boolean isDefault;

	@Override
	public Currency getCurrency() {
		return currency;
	}

	@Override
	public void setCurrency(Currency currency) {
		this.currency = currency;
	}

	@Override
	public Double getPrice() {
		return price;
	}

	@Override
	public void setPrice(Double price) {
		this.price = price;
	}

	@Override
	public Double getSpecialPrice() {
		return specialPrice;
	}

	@Override
	public void setSpecialPrice(Double specialPrice) {
		this.specialPrice = specialPrice;
	}

	@Override
	public Boolean getIsEnabledSpecialPrice() {
		return isEnabledSpecialPrice;
	}

	@Override
	public void setIsEnabledSpecialPrice(Boolean isEnabledSpecialPrice) {
		this.isEnabledSpecialPrice = isEnabledSpecialPrice;
	}

	@Override
	public Date getStartDate() {
		return startDate;
	}

	@Override
	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	@Override
	public Date getEndDate() {
		return endDate;
	}

	@Override
	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	@Override
	public Boolean getIsDefault() {
		return isDefault;
	}

	@Override
	public void setIsDefault(Boolean isDefault) {
		this.isDefault = isDefault;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = super.hashCode();
		result = prime * result + ((getId() == null) ? 0 : getId().hashCode());
		result = prime * result + ((currency == null) ? 0 : currency.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (!super.equals(obj))
			return false;
		if (getClass() != obj.getClass())
			return false;
		PriceImpl other = (PriceImpl) obj;
		if (getId() == null) {
			if (other.getId() != null)
				return false;
		} else if (!getId().equals(other.getId()))
			return false;
		if (currency == null) {
			if (other.currency != null)
				return false;
		} else if (!currency.equals(other.currency))
			return false;
		return true;
	}

}
