const categoryModel = require("../models/categoryModel");

const getAllCategorys = async (req, res) => {
  try {
    const categorys = await categoryModel.getAllCategorys();
    res.status(200).json(categorys);
  } catch {
    res.status(500).json({ message: "Erro ao buscar marcas" });
  }
};

const getCategoryById = async (req, res) => {
  try {
    const category = await categoryModel.getCategoryById(req.params.id);
    if (!category) {
      return res.status(404).json({ message: "Categoria não encontrada" });
    }
    res.status(200).json(category);
  } catch {
    res.status(500).json({ message: "Erro ao buscar Categoria" });
  }
};

const createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;
    if (!name || !description) {
      return res
        .status(400)
        .json({ message: "name e descrição são campos obrigatórios." });
    }
    const newCategory = await categoryModel.createCategory(name, description);
    res
      .status(201)
      .json({
        message: "Nova categoria cadastrada com sucesso 🎉",
        newCategory,
      });
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar categoria." });
  }
};

const updateCategory = async (req, res) => {
  try {
    const { name, description } = req.body;
    const updatedCategory = await categoryModel.updateCategory(
      req.params.id,
      name,
      description
    );

    if (!updatedCategory) {
      return res.status(404).json({ message: "Categoria não encontrada" });
    }

    res.json(updatedCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao atualizar categoria" });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const result = await categoryModel.deleteCategory(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res
      .status(404)
      .json({ message: error.message || "Erro ao deletar categoria" });
  }
};

module.exports = {
  getAllCategorys,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
