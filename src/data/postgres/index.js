import pkg from "pg";
const { Pool } = pkg;
export const pool = new Pool({
  host: "127.0.0.1",
  port: 5432,
  database: "microsafe",
  user: "postgres",
  password: "123456",
});
