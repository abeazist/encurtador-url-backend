import pool from "./database.js";

export async function criarTabelaLinks() {
  const query = `
    CREATE TABLE IF NOT EXISTS links (
      id SERIAL PRIMARY KEY,
      codigo VARCHAR(10) UNIQUE NOT NULL,
      legenda VARCHAR(255),
      url_original TEXT NOT NULL,
      clicks INTEGER DEFAULT 0,
      created_at TIMESTAMP DEFAULT NOW()
    );
  `;
  await pool.query(query);
  console.log('Tabela "links" verificada/criada.');
}

// export { criarTabelaLinks };
