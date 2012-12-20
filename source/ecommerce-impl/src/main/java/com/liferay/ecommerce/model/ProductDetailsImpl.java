package com.liferay.ecommerce.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.Max;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.Range;

import com.liferay.ecommerce.model.type.ProductStatus;
import com.liferay.ecommerce.model.type.ProductType;

@Entity
@Table(name = "product_details")
public class ProductDetailsImpl extends BaseModelImpl implements ProductDetails {

	private static final long serialVersionUID = 1L;

	@NotNull
	@Column(name = "product_status")
	@Enumerated(EnumType.STRING)
	private ProductStatus productStatus;

	@Size(min = 3, max = 100)
	@Column(name = "sku")
	private String sku;

	@NotNull
	@Column(name = "product_type")
	@Enumerated(EnumType.STRING)
	private ProductType productType;

	@NotNull
	@Column(name = "available_date")
	@Temporal(TemporalType.TIMESTAMP)
	private Date availableDate;

	@Column(name = "expiry_date")
	@Temporal(TemporalType.TIMESTAMP)
	private Date expiryDate;

	@Column(name = "invisible")
	private boolean invisible;

	@ManyToOne(targetEntity = ManufacturerImpl.class)
	@JoinColumn(name = "manufacturer_id")
	private Manufacturer manufacturer;

	@Size(min = 0, max = 100)
	@Column(name = "model")
	private String model;

	@Max(Long.MAX_VALUE)
	@Column(name = "quantity")
	private Long quantity;

	@Max(Long.MAX_VALUE)
	@Column(name = "weight")
	private Double weight;

	@Range(min = 0, max = 5)
	@Column(name = "rating")
	private Float rating;

	@NotNull
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
	public Manufacturer getManufacturer() {
		return manufacturer;
	}

	@Override
	public void setManufacturer(Manufacturer manufacturer) {
		this.manufacturer = manufacturer;
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
