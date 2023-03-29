CREATE TABLE produits (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    prix NUMERIC(10,2) NOT NULL,
    stock INTEGER NOT NULL,
    description TEXT NOT NULL,
    image VARCHAR(255) NOT NULL
 );

CREATE TABLE panier (
    id SERIAL PRIMARY KEY,
    id_produit INTEGER UNIQUE NOT NULL REFERENCES produits (id),
    quantite INTEGER NOT NULL
 );