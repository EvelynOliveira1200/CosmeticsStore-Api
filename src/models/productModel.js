const pool = require("../config/database");

const getAllProducts = async (price_product) => {
  if (price_product && price_product.trim()) {
    const result = await pool.query(
     "SELECT products.*, categorys.name AS category_name FROM products LEFT JOIN categorys ON products.category_id = categorys.id WHERE CAST(products.price_product AS TEXT) ILIKE $1",
     [`%${price_product.trim()}%`]
    );
    return result.rows;
  } else {
    const result = await pool.query(
      "SELECT products.*, categorys.name AS category_name FROM products LEFT JOIN categorys ON products.category_id = categorys.id"
    );
    return result.rows;
  }
};

const getProductById = async (id) => {
  const result = await pool.query("SELECT * FROM products WHERE id = $1", [id]);
  return result.rows[0];
};

const createProduct = async (category_id, name, price_product, photo) => {
  const result = await pool.query(
    `INSERT INTO products (category_id, name, price_product, photo) 
     VALUES ($1, $2, $3, $4) RETURNING *`,
    [category_id, name, price_product, photo]
  );
  return result.rows[0];
};



module.exports = { getAllProducts, getProductById };
