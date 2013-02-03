INSERT INTO ecommerce_store (id, name) VALUES (1, 'eugen');

INSERT INTO ecommerce_language (id, code, is_default) VALUES (1, 'en', true);
INSERT INTO ecommerce_language (id, code, is_default) VALUES (2, 'ro', false);
INSERT INTO ecommerce_store_to_language (language_id, store_id) VALUES (1, 1), (2, 1);


INSERT INTO ecommerce_product_details (id, available_date, create_date, expiry_date, invisible, last_modified_date, model, product_status, product_type, quantity)
VALUES (1, '2012-11-08 20:00:00', '2012-11-08 20:00:00', '2013-11-08 20:00:00', 0, '2012-11-08 20:00:00', 'Matrix', 'ENABLED', 'PHYSICAL', 1000);

INSERT INTO ecommerce_product (id, product_details_id) VALUES (1, 1);

INSERT INTO ecommerce_product_description (id, description, language_id, name, product_id) VALUES (1, 'Cool product', 1, 'Video Card', 1);
INSERT INTO ecommerce_product_description (id, description, language_id, name, product_id) VALUES (2, 'Produs Bun', 2, 'Video Cartela', 1);

INSERT INTO ecommerce_catalog (id) VALUES (1);
INSERT INTO ecommerce_catalog_description (id, description, language_id, name, catalog_id) VALUES (1, 'Cool catalog', 1, 'Video Card Catalog', 1);
INSERT INTO ecommerce_catalog_description (id, description, language_id, name, catalog_id) VALUES (2, 'Catalog Bun', 2, 'Catalog pentru video cartele', 1);
INSERT INTO ecommerce_store_to_catalog (catalog_id, store_id) VALUES (1, 1);

INSERT INTO ecommerce_catalog (id) VALUES (2);
INSERT INTO ecommerce_catalog_description (id, description, language_id, name, catalog_id) VALUES (3, 'aaaa', 1, 'cccc', 2);
INSERT INTO ecommerce_catalog_description (id, description, language_id, name, catalog_id) VALUES (4, 'bbbb', 2, 'dddd', 2);
INSERT INTO ecommerce_store_to_catalog (catalog_id, store_id) VALUES (2, 1);

INSERT INTO ecommerce_catalog (id, parent_catalog_id) VALUES (3, 2);
INSERT INTO ecommerce_catalog_description (id, description, language_id, name, catalog_id) VALUES (5, 'qqqq', 1, 'eeee', 3);
INSERT INTO ecommerce_catalog_description (id, description, language_id, name, catalog_id) VALUES (6, 'wwww', 2, 'rrrr', 3);
INSERT INTO ecommerce_store_to_catalog (catalog_id, store_id) VALUES (3, 1);


INSERT INTO ecommerce_currency (id, code, is_default) VALUES (1, 'USD', 1), (2, 'MDL', 0);
INSERT INTO ecommerce_store_to_currency (currency_id, store_id) VALUES (1, 1), (2, 1);

INSERT INTO ecommerce_price (id, is_default, is_enabled_special_price, end_date, price, special_price, start_date, currency_id, product_id) 
VALUES (1, 1, 0, null, 123.45, null, null, 1, 1),
(2, 1, 1, null, 654.12356, 125.2, null, 1, 1);

INSERT INTO ecommerce_store_to_product (product_id, store_id) VALUES (1, 1);


