import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

pool
  .connect()
  .then(() => {
    console.log("✅ Conectado ao banco Render com sucesso!");
    return pool.end();
  })
  .catch((err) => {
    console.error("❌ Erro de conexão:", err);
  });
