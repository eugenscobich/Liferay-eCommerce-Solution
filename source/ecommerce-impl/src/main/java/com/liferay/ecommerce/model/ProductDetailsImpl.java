package com.liferay.ecommerce.model;

import java.util.Date;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.liferay.ecommerce.model.type.ProductStatus;
import com.liferay.ecommerce.model.type.ProductType;

@Entity
@Table(name = "product_details")
public class ProductDetailsImpl extends BaseModelImpl implements ProductDetails {

	private static final long serialVersionUID = 1L;

	@Column(name = "product_status")
	@Enumerated(EnumType.STRING)
	private ProductStatus productStatus;

	@Column(name = "sku")
	private String sku;

	@Column(name = "product_type")
	@Enumerated(EnumType.STRING)
	private ProductType productType;

	@Column(name = "available_date")
	@Temporal(TemporalType.TIMESTAMP)
	private Date availableDate;

	@Column(name = "expiry_date")
	@Temporal(TemporalType.TIMESTAMP)
	private Date expiryDate;

	@Column(name = "invisible")
	private boolean invisible;

	@OneToMany(targetEntity = ManufacturerImpl.class)
	@JoinColumn(name = "product_details_id")
	private Set<Manufacturer> manufacturers;

	@Column(name = "model")
	private String model;

	@Column(name = "quantity")
	private Long quantity;

	@Column(name = "weight")
	private Double weight;

	@Column(name = "rating")
	private Float rating;

	@Column(name = "createDate")
	@Temporal(TemporalType.TIMESTAMP)
	private Date createDate;

	@Column(name = "lastModifiedDate")
	@Temporal(TemporalType.TIMESTAMP)
	private Date lastModifiedDate;

	
	@Override
	public ProductStatus getProductStatus() {
		return productStatus;
	}

	@Override
	public void setProductStatus(ProductStatus productStatus) {
		this.productStatus = productStatus;
	}

	@Override
	public String getSku() {
		return sku;
	}

	@Override
	public void setSku(String sku) {
		this.sku = sku;
	}

	@Override
	public ProductType getProductType() {
		return productType;
	}

	@Override
	public void setProductType(ProductType productType) {
		this.productType = productType;
	}

	@Override
	public Date getAvailableDate() {
		return availableDate;
	}

	@Override
	public void setAvailableDate(Date availableDate) {
		this.availableDate = availableDate;
	}

	@Override
	public Date getExpiryDate() {
		return expiryDate;
	}

	@Override
	public void setExpiryDate(Date expiryDate) {
		this.expiryDate = expiryDate;
	}

	@Override
	public boolean isInvisible() {
		return invisible;
	}
	
	@Override
	public void setInvisible(boolean invisible) {
		this.invisible = invisible;
	}

	@Override
	public Set<Manufacturer> getManufacturers() {
		return manufacturers;
	}

	@Override
	public void setManufacturers(Set<Manufacturer> manufacturers) {
		this.manufacturers = manufacturers;
	}

	@Override
	public String getModel() {
		return model;
	}
	
	@Override
	public void setModel(String model) {
		this.model = model;
	}

	@Override
	public Long getQuantity() {
		return quantity;
	}

	@Override
	public void setQuantity(Long quantity) {
		this.quantity = quantity;
	}

	@Override
	public Double getWeight() {
		return weight;
	}

	@Override
	public void setWeight(Double weight) {
		this.weight = weight;
	}

	@Override
	public Float getRating() {
		return rating;
	}

	@Override
	public void setRating(Float rating) {
		this.rating = rating;
	}

	@Override
	public Date getCreateDate() {
		return createDate;
	}

	@Override
	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}

	@Override
	public Date getLastModifiedDate() {
		return lastModifiedDate;
	}

	@Override
	public void setLastModifiedDate(Date lastModifiedDate) {
		this.lastModifiedDate = lastModifiedDate;
	}

}
