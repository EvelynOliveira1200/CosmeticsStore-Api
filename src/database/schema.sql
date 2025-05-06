CREATE DATABASE cosmeticsstore;

\c cosmeticsstore;

CREATE TABLE categorys (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(250) NOT NULL,
    description VARCHAR(300)
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    category_id INTEGER REFERENCES categorys(id) ON DELETE CASCADE,
    nome VARCHAR(250) NOT NULL,
    photo TEXT,
    price_product DECIMAL(10,2)
);

INSERT INTO categorys (nome, description) VALUES 
('Maquiagem', 'Produtos de Maquiagem');

INSERT INTO products (category_id, nome, photo, price_product) VALUES
(2, 'Make', 'https://testeteste', 2.3),
(3, 'Lipstick', 'https://example.com/lipstick', 5.5),
(2, 'Eyeliner', 'https://example.com/eyeliner', 3.8);