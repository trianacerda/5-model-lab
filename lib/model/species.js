import pool from '../utils/pool.js';

export default class Species {
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
      'INSERT INTO species (name, url_) VALUES ($1, $2) RETURNING *',
      [item.name, item.url]
    );
    return new Species(rows[0]);
  }
}
