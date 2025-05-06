const pool = require("../config/database");

const getAllProducts = async (price_product) => {
  if (price_product && price_product.trim()) {
    const result = await pool.query(
     "SELECT products.*, categorys.nome AS category_name FROM products LEFT JOIN categorys ON products.category_id = categorys.id WHERE CAST(products.price_product AS TEXT) ILIKE $1",
     [`%${price_product.trim()}%`]
    );
    return result.rows;
  } else {
    const result = await pool.query(
      "SELECT products.*, categorys.nome AS category_name FROM products LEFT JOIN categorys ON products.category_id = categorys.id"
    );
    return result.rows;
  }
};

module.exports = { getAllProducts };
