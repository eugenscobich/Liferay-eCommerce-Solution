package com.liferay.ecommerce.model;

import java.util.List;
import java.util.Set;

public interface Product extends BaseModel {

	List<ProductDescription> getProductDescriptions();

	void setProductDescriptions(List<ProductDescription> productDescriptions);

	ProductDetails getProductDetails();

	void setProductDetails(ProductDetails productDetails);

	Set<Price> getPrices();

	void setPrices(Set<Price> prices);

	Set<Media> getMedias();

	void setMedias(Set<Media> medias);

	List<Catalog> getCatalogs();

	void setCatalogs(List<Catalog> catalogs);

	List<Product> getProducts();

	void setProducts(List<Product> products);

	Set<DigitalDownload> getDigitalDownloads();

	void setDigitalDownloads(Set<DigitalDownload> digitalDownloads);

	Set<Store> getStores();

	void setStores(Set<Store> stores);

}
