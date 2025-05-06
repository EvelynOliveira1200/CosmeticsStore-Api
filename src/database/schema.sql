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
('Produtos para cabelo', 'Shampoos, condicionadores, máscaras e óleos capilares.'),
('Produtos para maquiagem', 'Bases, sombras, batons e acessórios.'),
('Produtos para hidratação', 'Cremes e loções hidratantes.'),
('Produtos para limpeza facial', 'Sabonetes, loções e géis de limpeza.'),
('Protetores solares', 'Cremes e sprays para proteção solar.'),
('Produtos para unhas', 'Esmaltes e fortalecedores.'),
('Sabonetes e desodorantes', 'Higiene pessoal e controle de odor.'),
('Séruns e tratamentos', 'Produtos concentrados para cuidados específicos.');


