import { drizzle } from "drizzle-orm/node-postgres";
import pkg from "pg";
import "dotenv/config";

const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: false, // desativa SSL local
});

export const db = drizzle(pool);
