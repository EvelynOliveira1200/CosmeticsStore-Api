const productModel = require("../models/productModel");

const getAllProducts = async (req, res) => {
    try {
        const { price_product } = req.query;
        const products = await productModel.getAllProducts( price_product );
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar Produto" });
    }
};

module.exports = {getAllProducts}