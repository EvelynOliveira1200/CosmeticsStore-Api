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
('Limpeza facial', 'sabonetes, loções, géis de limpeza.'),
('Hidratantes', 'cremes, loções, óleos.'),
('Protetores solares', 'cremes, loções, sprays.'),
('Tratamentos específicos', 'produtos para acne, rugas, celulite, etc.'),
('Esfoliantes', 'produtos para remover células mortas da pele.'),
('Tônicos', 'produtos para equilibrar o pH da pele.'),
('Séruns', 'produtos com ingredientes concentrados para tratamentos específicos.'),
('Maquiagem', 'para realçar a beleza das mulheres'),
('Shampus', 'para limpar os cabelos.'),
('Condicionadores', 'para hidratar e desembaraçar os cabelos.'),
('Máscaras', 'para tratamento intensivo dos cabelos.'),
('Óleos capilares', 'para hidratar e proteger as pontas.'),
('Produtos para penteados', 'géis, mousses, sprays.'),
('Tinturas e descolorantes', 'para mudar a cor dos cabelos.'),
('Sabonetes', 'para limpar o corpo e as mãos.'),
('Desodorantes', 'para controlar o odor corporal.'),
('Cuidados com as unhas', 'esmaltes, removedores, fortalecedores.'),
('Acessórios', 'pincéis, esponjas, aplicadores.');

