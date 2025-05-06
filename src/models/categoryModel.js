const pool = require("../config/database");

const getAllCategorys = async () => {
    const result = await pool.query("SELECT * FROM categorys");
    return result.rows;
  };

const getCategoryById = async (id) => {
    const result = await pool.query("SELECT * FROM categorys WHERE id = $1", [id]);
    return result.rows[0];
  };

const createCategory = async (name, description) => {  
    const result = await pool.query(
      `INSERT INTO categorys (name, description) VALUES ($1, $2) RETURNING *`,
      [name, description]
    );
    return result.rows[0];
};

const updateCategory = async (id, name, description) => {
    const result = await pool.query(
      `UPDATE categorys SET name = $1, description = $2 WHERE id = $3 RETURNING *`,
      [name, description, id]
    );
    return result.rows[0];
  };

  const deleteCategory = async (id) => {
    const result = await pool.query(`DELETE FROM categorys WHERE id = $1`, [id]);
    if (result.rowCount === 0) {
      throw new Error("Categoria não encontrada.");
    }
    return { message: "Categoria deletada com sucesso" };
  };

module.exports = { getAllCategorys, getCategoryById, createCategory, updateCategory, deleteCategory }