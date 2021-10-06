import pool from '../utils/pool.js';

export default class Habitat {
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
      'INSERT INTO habitat (name, url_) VALUES ($1, $2) RETURNING *',
      [item.name, item.url]
    );
    return new Habitat(rows[0]);
  }
}
