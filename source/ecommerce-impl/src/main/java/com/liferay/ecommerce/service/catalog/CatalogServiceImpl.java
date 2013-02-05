package com.liferay.ecommerce.service.catalog;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.liferay.ecommerce.dao.catalog.CatalogDataAccess;
import com.liferay.ecommerce.model.Catalog;
import com.liferay.ecommerce.model.CatalogDescription;
import com.liferay.ecommerce.model.CatalogDescriptionImpl;
import com.liferay.ecommerce.model.CatalogImpl;
import com.liferay.ecommerce.model.Language;
import com.liferay.ecommerce.model.Store;
import com.liferay.ecommerce.service.currency.CurrencyService;
import com.liferay.ecommerce.service.language.LanguageService;
import com.liferay.ecommerce.util.ServiceUtil;

@Service
public class CatalogServiceImpl implements CatalogService {
	@Autowired
	private CatalogDataAccess catalogDataAccess;

	@Autowired
	private LanguageService languageService;

	@Autowired
	private CurrencyService currencyService;

	@Override
	@Transactional(readOnly = true)
	public List<Catalog> getCatalogsForPage(Store store, Integer page, Integer rows, Language language) {
		ServiceUtil.validateStore(store);
		List<Catalog> catalogs = catalogDataAccess.getCatalogsForPage(store.getId(), page, rows, language.getId());
		for (Catalog catalog : catalogs) {
			catalog.setChildren(getCatalogChildren(catalog, language));
		}
		return catalogs;
	}

	private List<Catalog> getCatalogChildren(Catalog catalog, Language language) {
		List<Catalog> catalogs = catalogDataAccess.getCatalogChildren(catalog.getId(), language.getId());
		if (catalogs != null && !catalogs.isEmpty()) {
			for (Catalog catalog2 : catalogs) {
				catalog2.setChildren(getCatalogChildren(catalog2, language));
			}
		}
		return catalogs;
	}

	@Override
	@Transactional(readOnly = true)
	public Long getNumberOfCatalogs(Store store) {
		ServiceUtil.validateStore(store);
		return catalogDataAccess.getNumberOfCatalogs(store.getId());
	}

	@Override
	@Transactional
	public Catalog getNewCatalog(Store store) {
		Catalog catalog = new CatalogImpl();
		catalog.setIsActive(true);
		// Prepare catalog description
		List<Language> languages = languageService.getAvailableLanguages(store);
		List<CatalogDescription> catalogDescriptions = new ArrayList<CatalogDescription>();
		for (Language language : languages) {
			CatalogDescription catalogDescription = new CatalogDescriptionImpl();
			catalogDescription.setLanguage(language);
			if (language.getIsDefault()) {
				catalogDescription.setIsDefault(true);
			} else {
				catalogDescription.setIsDefault(false);
			}
			catalogDescriptions.add(catalogDescription);
		}
		catalog.setCatalogDescriptions(catalogDescriptions);

		// prepare store
		catalog.setStores(new HashSet<Store>(Arrays.asList(store)));
		return catalog;
	}

	@Override
	@Transactional(readOnly = true)
	public Catalog get(Long catalogId) {
		return catalogDataAccess.find(catalogId);
	}

	@Override
	@Transactional(readOnly = true)
	public Catalog getForEdit(Long catalogId) {
		Catalog catalog = catalogDataAccess.find(catalogId);
		catalog.getCatalogDescriptions().size();
		return catalog;
	}

	@Override
	@Transactional
	public void save(Catalog catalog) {
		if (catalog.getId() == null) {
			catalogDataAccess.persist(catalog);
		} else {
			catalogDataAccess.merge(catalog);
		}
	}

	@Override
	@Transactional
	public void remove(List<Long> catalogIds) {
		for (Long id : catalogIds) {
			Catalog catalog = catalogDataAccess.find(id);
			if (catalog != null) {
				catalogDataAccess.remove(catalog);
			}
		}

	}

	@Override
	@Transactional(readOnly = true)
	public List<Catalog> getAllCatalogs(Store store, Language language) {
		ServiceUtil.validateStore(store);
		List<Catalog> catalogs = catalogDataAccess.getAllCatalogs(store.getId(), language.getId());
		for (Catalog catalog : catalogs) {
			catalog.setChildren(getCatalogChildren(catalog, language));
		}
		return catalogs;
	}

	@Override
	@Transactional(readOnly = true)
	public List<Catalog> getAllActiveCatalogs(Store store, Language language) {
		ServiceUtil.validateStore(store);
		List<Catalog> catalogs = catalogDataAccess.getAllActiveCatalogs(store.getId(), language.getId());
		for (Catalog catalog : catalogs) {
			catalog.setChildren(getActiveCatalogChildren(catalog, language));
		}
		return catalogs;
	}
	
	private List<Catalog> getActiveCatalogChildren(Catalog parentCatalog, Language language) {
		List<Catalog> catalogs = catalogDataAccess.getActiveCatalogChildren(parentCatalog.getId(), language.getId());
		if (catalogs != null && !catalogs.isEmpty()) {
			for (Catalog catalog : catalogs) {
				catalog.setChildren(getActiveCatalogChildren(catalog, language));
			}
		}
		return catalogs;
	}
}
