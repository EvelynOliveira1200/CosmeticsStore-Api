const express = require("express");
const router = express.Router();
const upload = require("../config/upload");
const productController = require("../controllers/productController");  
const apiKeyMiddleware = require("../config/apiKey");

router.use(apiKeyMiddleware);

router.get("/products", productController.getAllProducts);
router.get("/product/:id", productController.getProductById);
router.post("/product", upload.single("photo"), productController.createProduct);
router.put("/product/:id", productController.updateProduct);
router.delete("/product/:id", productController.deleteProduct);

module.exports = router;