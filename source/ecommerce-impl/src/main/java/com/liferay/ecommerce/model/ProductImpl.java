package com.liferay.ecommerce.model;

import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Transient;

@Entity(name = "Product")
@Table(name = "product")
@NamedQueries({
		@NamedQuery(name = "Product.findAll", query = "SELECT p FROM Product p INNER JOIN p.stores s LEFT JOIN FETCH p.productDescriptions pdcpr WHERE s.id = :storeId and pdcpr.language.id = :languageId"),
		@NamedQuery(name = "Product.totalNumber", query = "SELECT COUNT(*) FROM Product p INNER JOIN p.stores s WHERE s.id = :storeId") })
public class ProductImpl extends BaseModelImpl implements Product {

	private static final long serialVersionUID = 1L;

	@OneToMany(cascade = CascadeType.ALL, targetEntity = ProductDescriptionImpl.class)
	@JoinColumn(name = "product_id")
	private Set<ProductDescription> productDescriptions;

	@OneToOne(cascade = CascadeType.ALL, targetEntity = ProductDetailsImpl.class)
	@JoinColumn(name = "product_details_id")
	private ProductDetails productDetails;

	@OneToMany(cascade = CascadeType.ALL, targetEntity = PriceImpl.class)
	@JoinColumn(name = "product_id")
	private Set<Price> prices;

	@OneToMany(cascade = CascadeType.ALL, targetEntity = MediaImpl.class)
	@JoinTable(name = "product_to_media", joinColumns = { @JoinColumn(name = "product_id") }, inverseJoinColumns = { @JoinColumn(name = "media_id") })
	private Set<Media> medias;

	@ManyToMany(targetEntity = CatalogImpl.class)
	@JoinTable(name = "product_to_catalog", joinColumns = { @JoinColumn(name = "product_id") }, inverseJoinColumns = { @JoinColumn(name = "catalog_id") })
	private Set<Catalog> catalogs;

	@ManyToMany(targetEntity = ProductImpl.class)
	@JoinTable(name = "product_to_product", joinColumns = { @JoinColumn(name = "parent_product_id") }, inverseJoinColumns = { @JoinColumn(name = "product_id") })
	private List<Product> products;

	@OneToMany(cascade = CascadeType.ALL, targetEntity = DigitalDownloadImpl.class)
	@JoinColumn(name = "product_id")
	private Set<DigitalDownload> digitalDownloads;

	@ManyToMany(targetEntity = StoreImpl.class)
	@JoinTable(name = "store_to_product", joinColumns = { @JoinColumn(name = "product_id") }, inverseJoinColumns = { @JoinColumn(name = "store_id") })
	private Set<Store> stores;

	@Transient
	private ProductDescription productDescription;

	@Override
	public Set<ProductDescription> getProductDescriptions() {
		return productDescriptions;
	}

	@Override
	public void setProductDescriptions(Set<ProductDescription> productDescriptions) {
		this.productDescriptions = productDescriptions;
	}

	@Override
	public ProductDetails getProductDetails() {
		return productDetails;
	}

	@Override
	public void setProductDetails(ProductDetails productDetails) {
		this.productDetails = productDetails;
	}

	@Override
	public Set<Price> getPrices() {
		return prices;
	}

	@Override
	public void setPrices(Set<Price> prices) {
		this.prices = prices;
	}

	@Override
	public Set<Media> getMedias() {
		return medias;
	}

	@Override
	public void setMedias(Set<Media> medias) {
		this.medias = medias;
	}

	@Override
	public Set<Catalog> getCatalogs() {
		return catalogs;
	}

	@Override
	public void setCatalogs(Set<Catalog> catalogs) {
		this.catalogs = catalogs;
	}

	@Override
	public List<Product> getProducts() {
		return products;
	}

	@Override
	public void setProducts(List<Product> products) {
		this.products = products;
	}

	@Override
	public Set<DigitalDownload> getDigitalDownloads() {
		return digitalDownloads;
	}

	@Override
	public void setDigitalDownloads(Set<DigitalDownload> digitalDownloads) {
		this.digitalDownloads = digitalDownloads;
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
	public ProductDescription getProductDescription() {
		return productDescription;
	}

	@Override
	public void setProductDescription(ProductDescription productDescription) {
		this.productDescription = productDescription;
	}

}
