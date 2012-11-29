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

@Entity(name = "Language")
@Table(name = "language")
@NamedQueries({
		@NamedQuery(name = "Language.getLanguageByCode", query = "SELECT l FROM Language l INNER JOIN l.stores s WHERE s.id = :storeId and l.code = :languageCode"),
		@NamedQuery(name = "Language.getLanguageByCodes", query = "SELECT l FROM Language l INNER JOIN l.stores s WHERE s.id = :storeId and l.code IN (:languageCodes)") })
public class LanguageImpl extends BaseModelImpl implements Language {

	private static final long serialVersionUID = 1L;

	@Column(name = "code")
	private String code;

	@ManyToMany(targetEntity = StoreImpl.class)
	@JoinTable(name = "store_to_language", joinColumns = { @JoinColumn(name = "language_id") }, inverseJoinColumns = { @JoinColumn(name = "store_id") })
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
		LanguageImpl other = (LanguageImpl) obj;
		if (code == null) {
			if (other.code != null)
				return false;
		} else if (!code.equals(other.code))
			return false;
		if (getId() == null) {
			if (other.getId() != null)
				return false;
		} else if (!getId().equals(other.getId()))
			return false;
		return true;
	}

}
