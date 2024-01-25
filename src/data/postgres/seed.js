import { pool } from "./index.js";

const client = await pool.connect();

const seedQuery =
  "CREATE TABLE buttonStates ( id SERIAL PRIMARY KEY, state VARCHAR(255));";
const values = [];

const res = await client.query(seedQuery, values);
console.log(res.rows[0]);
client.release();
