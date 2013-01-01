package com.liferay.ecommerce.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

@Entity(name = "Currency")
@Table(name = "currency")
@NamedQueries({ @NamedQuery(name = "Currency.getAvailableCurrency", query = "SELECT c FROM Currency c INNER JOIN c.stores s WHERE s.id = :storeId") })
public class CurrencyImpl extends BaseModelImpl implements Currency {

	private static final long serialVersionUID = 1L;

	@Column(name = "code")
	private String code;

	@Column(name = "is_default")
	private Boolean isDefault;

	@ManyToMany(targetEntity = StoreImpl.class)
	@JoinTable(name = "store_to_currency", joinColumns = { @JoinColumn(name = "currency_id") }, inverseJoinColumns = { @JoinColumn(name = "store_id") })
	private Set<Store> stores = new HashSet<Store>();

	@Override
	public String getCode() {
		return code;
	}

	@Override
	public void setCode(String code) {
		this.code = code;
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
	public Set<Store> getStores() {
		return stores;
	}

	@Override
	public void setStores(Set<Store> stores) {
		this.stores = stores;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = super.hashCode();
		result = prime * result + ((code == null) ? 0 : code.hashCode());
		result = prime * result + ((getId() == null) ? 0 : getId().hashCode());
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
		CurrencyImpl other = (CurrencyImpl) obj;
		if (getId() == null) {
			if (other.getId() != null)
				return false;
		} else if (!getId().equals(other.getId()))
			return false;
		if (code == null) {
			if (other.code != null)
				return false;
		} else if (!code.equals(other.code))
			return false;
		return true;
	}

}
