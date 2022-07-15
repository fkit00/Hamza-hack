import pg from "pg";

const pool = new pg.Pool({
  connectionString: process.env.PGURI,
  ssl: { rejectUnauthorized: false },
});

export function query(text, params, callback) {
  return pool.query(text, params, callback);
}

//this shows you that you're connecting to the database
//console.log(await query("SELECT NOW()"));
