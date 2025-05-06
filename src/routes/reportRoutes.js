const express = require("express");
const router = express.Router();
const reportController = require("../controllers/reportController");

// Rota para gerar PDF de marcas
router.get("/report/categorys/pdf", reportController.exportCategoryPDF);

// Rota para gerar PDF de cosméticos
router.get("/report/products/pdf", reportController.exportProductPDF);

module.exports = router;