CREATE DATABASE cosmeticsstore;

\c cosmeticsstore;

CREATE TABLE categorys (
    id SERIAL PRIMARY KEY,
    name VARCHAR(250) NOT NULL,
    description VARCHAR(300)
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    category_id INTEGER REFERENCES categorys(id) ON DELETE CASCADE,
    name VARCHAR(250) NOT NULL,
    photo TEXT,
    price_product DECIMAL(10,2)
);

INSERT INTO categorys (name, description) VALUES 
('Maquiagem', 'Produtos de Maquiagem');

INSERT INTO products (category_id, name, photo, price_product) VALUES
(1, 'Make', 'https://testeteste', 2.3),
(1, 'Lipstick', 'https://example.com/lipstick', 5.5),
(1, 'Eyeliner', 'https://example.com/eyeliner', 3.8);