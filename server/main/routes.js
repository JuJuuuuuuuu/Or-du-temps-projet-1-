var express = require('express');
var router = express.Router();

const pool = require('./database');


//Afficher tous les produits
router.get('/produits', async function (req, res) {
    try {
        const allProducts = await pool.query("SELECT * FROM produits ORDER BY id");
        res.json(allProducts.rows);
    } catch (err) {
        console.error(err.message);
    }
});


//Augmenter le stock d'un produit
router.post('/produits/ajouter', async function (req, res) {
    try {
        const {id, stock} = req.body;
        const updateStock = await pool.query(`UPDATE produits
                                              SET stock = stock + ${stock}
                                              WHERE id = ${id}`);
        res.json("Stock mis à jour");
    } catch (err) {
        console.error(err.message);
    }
});


//Diminuer le stock d'un produit
router.post('/produits/retirer', async function (req, res) {
    try {
        const {id, quantite} = req.body;
        const updateStock = await pool.query(`UPDATE produits
                                              SET stock = stock - ${quantite}
                                              WHERE id = ${id}`);
        res.json("Stock mis à jour");
    } catch (err) {
        console.error(err.message);
    }
});


//Afficher le panier
router.get('/panier', async function (req, res) {
    try {
        const panier = await pool.query(`SELECT *
                                         FROM panier
                                                  INNER JOIN produits ON panier.id_produit = produits.id`);
        console.log(panier.rows);
        res.json(panier.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//Ajouter un produit au panier, augmenter la quantité si le produit est déjà dans le panier
router.post('/panier/ajouter', async function (req, res) {
    try {
        const {id, quantite} = req.body;
        const addProduct = await pool.query(`INSERT INTO panier (id_produit, quantite)
                                             VALUES (${id}, ${quantite})
                                             ON CONFLICT (id_produit) DO UPDATE
                                                 SET quantite = panier.quantite + ${quantite}`);
        res.json("Produit ajouté au panier");
    } catch (err) {
        console.error(err.message);
    }
});

//Retirer un produit du panier
router.delete('/panier/retirer', async function (req, res) {
    try {
        console.log(req.body)
        const {id} = req.body;
        const removeProduct = await pool.query(`DELETE
                                                FROM panier
                                                WHERE id_produit = ${id}`);
        res.json("Produit retiré du panier");
    } catch (err) {
        console.error(err.message);
    }
});


module.exports = router;