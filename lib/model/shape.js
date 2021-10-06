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
}
