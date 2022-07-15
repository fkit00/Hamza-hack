import pg from "pg";

const pool = new pg.Pool({
  connectionString: process.env.PGURI,
  ssl: { rejectUnauthorized: false },
});
export function query(text, params, callback) {
  return pool.query(text, params, callback);
}
console.log(await query("SELECT NOW()"));
