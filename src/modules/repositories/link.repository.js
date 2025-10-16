// src/modules/repositories/link.repository.js
import pool from "../../infra/database.js";

const LinkRepository = {
  async create({ codigo, legenda, url_original }) {
    const result = await pool.query(
      `INSERT INTO links (codigo, legenda, url_original)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [codigo, legenda, url_original]
    );
    return result.rows[0];
  },

  // listar todos
  async findAll() {
    const result = await pool.query(`SELECT * FROM links ORDER BY id DESC`);
    return result.rows;
  },

  // buscar por id
  async findById(id) {
    const result = await pool.query(`SELECT * FROM links WHERE id = $1`, [id]);
    return result.rows[0];
  },

  // buscar por código
  async findByCodigo(codigo) {
    const result = await pool.query(`SELECT * FROM links WHERE codigo = $1`, [codigo]);
    return result.rows[0];
  },

  // atualiza
  async update(id, { legenda, url_original }) {
    const result = await pool.query(
      `
      UPDATE links
      SET legenda = COALESCE($1, legenda),
          url_original = COALESCE($2, url_original)
      WHERE id = $3
      RETURNING *
      `,
      [legenda, url_original, id]
    );
    return result.rows[0];
  },

  async delete(id) {
    const result = await pool.query(`DELETE FROM links WHERE id = $1`, [id]);
    return result.rowCount > 0;
  },

  async incrementarClicks(id) {
    await pool.query(`UPDATE links SET clicks = clicks + 1 WHERE id = $1`, [id]);
  },
};

export default LinkRepository;
