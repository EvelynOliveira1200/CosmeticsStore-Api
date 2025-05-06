require("dotenv").config();
const express = require("express");
const cors = require("cors");
const productRoutes = require("./src/routes/productRoutes");
const categoryRoutes = require("./src/routes/categoryRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", productRoutes);
app.use("/api", categoryRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`💅💄 Servidor rodando em http://localhost:${PORT}`);
});
