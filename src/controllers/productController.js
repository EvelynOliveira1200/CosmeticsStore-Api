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

const getProductById = async (req, res) => {
    try {
      const product = await productModel.getProductById(req.params.id);
      if (!product) {
        return res.status(404).json({ message: "Produto não encontrado" });
      }
      res.status(200).json(product);
    } catch (error) {
      res.status(404).json({ message: "Erro ao buscar produto" });
    }
  };

  const createProduct = async (req, res) => {
    try {
      const { category_id, name, price_product } = req.body;
      const photo = req.file ? req.file.filename : null;
  
      const newProduct = await productModel.createProduct(
        category_id,
        name,
        price_product ,
        photo
      );
  
      res.status(201).json(newProduct);
    } catch (error) {
      console.error(error);
      if (error.code === "23505") {
        return res.status(400).json({ message: "Produto já cadastrado" });
      }
      res.status(404).json({ message: "Erro ao criar  produto" });
    }
  };

  const updateProduct = async (req, res) => {
    try {
      const { name, price_product } = req.body;
  
      const updatedProduct = await productModel.updateProduct(
        req.params.id,
        name, price_product
      );
  
      if (!updatedProduct) {
        return res.status(404).json({ message: "Produto não encontrado." });
      }
  
      res.json(updatedProduct);
    } catch (error) {
      res.status(404).json({ message: "Erro ao atualizar  produto." });
    }
  };

  const deleteProduct = async (req, res) => {
    try {
      const message = await productModel.deleteProduct(req.params.id);
      res.json(message);
    } catch (error) {
      res.status(404).json({ message: "Erro ao deletar  produto" });
    }
  };

module.exports = { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct}