import pool from '../utils/pool.js';

export default class Shape {
  id;
  name;
  url;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.url = row.url_;
  }

  static async insert(item) {
    const { rows } = await pool.query(
      'INSERT INTO shape (name, url_) VALUES ($1, $2) RETURNING *',
      [item.name, item.url]
    );
    return new Shape(rows[0]);
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM shape');
    return new Shape(rows[0]);
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM shape WHERE id = $1', [
      id,
    ]);
    return new Shape(rows[0]);
  }

  static async patchById(id, { name }) {
    const { rows } = await pool.query(
      'UPDATE shape SET name = $2 WHERE id = $1 RETURNING *;',
      [id, name]
    );
    return new Shape(rows[0]);
  }

  static async deleteById(id) {
    const { rows } = await pool.query(
      'DELETE FROM shape WHERE id = $1 RETURNING *',
      [id]
    );
    return new Shape(rows);
  }
}
