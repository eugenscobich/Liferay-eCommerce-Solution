package com.liferay.ecommerce.service.catalog;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.liferay.ecommerce.dao.catalog.CatalogDataAccess;
import com.liferay.ecommerce.model.Catalog;
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
}
