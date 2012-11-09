INSERT INTO ecommerce_store (id, name) VALUES (1, 'eugen');

INSERT INTO ecommerce_product_details (id, available_date, create_date, expiry_date, invisible, last_modified_date, model, product_status, product_type, quantity)
VALUES (1, '2012-11-08 20:00:00', '2012-11-08 20:00:00', '2013-11-08 20:00:00', 0, '2012-11-08 20:00:00', 'Matrix', 'ENABLED', 'PHYSICAL', 1000);

INSERT INTO ecommerce_product (id, product_details_id) VALUES (1, 1);

INSERT INTO ecommerce_product_description (id, description, locale, name, product_id) VALUES (1, 'Cool product', 'en_EN', 'Video Card', 1);
INSERT INTO ecommerce_product_description (id, description, locale, name, product_id) VALUES (2, 'Produs Bun', 'ro_RO', 'Video Cartela', 1);

INSERT INTO ecommerce_currency (id, code) VALUES (1, 'USD');

INSERT INTO ecommerce_price (id, enable_special, end_date, price, special_price, start_date, currency_id, product_id) 
VALUES (1, 0, null, 123.45, null, null, 1, 1);

INSERT INTO ecommerce_product_to_store (product_id, store_id) VALUES (1, 1);