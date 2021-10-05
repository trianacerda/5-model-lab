import pool from '../utils/pool.js';

export default class Pokemon {
  id;
  name;
  url;

  constructor(row) {
    this.id = row.id;
    this.name = row.poke_name;
    this.url = row.url_;
  }

  static async insert(item) {
    const { rows } = await pool.query(
      'INSERT INTO pokemon (poke_name, url_) VALUES ($1, $2) RETURNING *',
      [item.name, item.url]
    );
    return new Pokemon(rows[0]);
  }

  // static async getAll() {
  //   const { rows } = await pool.query('SELECT * FROM pokemon');
  //   return rows.map((row) => new Pokemon(row));
  // }

  // // static async getById(id) {
  // //   const { rows } = await pool.query('SELECT * FROM pokemon WHERE id = $1', [
  // //     id,
  // //   ]);
  // //   return new Pokemon(rows[0]);
  // // }

  // static async patchById(id, name) {
  //   const { rows } = await pool.query(
  //     'UPDATE pokemon SET poke_name = $2 WHERE id = $1 RETURNING *;',
  //     [id, name]
  //   );
  //   return new Pokemon(rows[0]);
  // }

  // static async deleteById(id) {
  //   const { rows } = await pool.query(
  //     'DELETE FROM pokemon WHERE id = $1 RETURNING *',
  //     [id]
  //   );
  //   return new Pokemon(rows);
  // }
}
