import pool from '../utils/pool.js';

export default class Color {
  id;
  name;
  url;

  constructor(row) {
    this.id = row.id;
    this.color = row.color;
    this.url = row.url_;
  }

  static async insert(item) {
    const { rows } = await pool.query(
      'INSERT INTO color (color, url_) VALUES ($1, $2) RETURNING *',
      [item.color, item.url]
    );
    return new Color(rows[0]);
  }
}
