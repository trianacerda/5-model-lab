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

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM species');
    return new Species(rows[0]);
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM species WHERE id= $1', [
      id,
    ]);
    return new Species(rows[0]);
  }

  static async patchById(id, { name }) {
    const { rows } = await pool.query(
      'UPDATE species SET name = $2 WHERE id = $1 RETURNING *;',
      [id, name]
    );
    return new Species(rows[0]);
  }

  static async ditchById(id) {
    const { rows } = await pool.query(
      'DELETE FROM species WHERE id = $1 RETURNING *;',
      [id]
    );
    return new Species(rows);
  }
}
