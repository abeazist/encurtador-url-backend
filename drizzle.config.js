import 'dotenv/config';

console.log(process.env.DATABASE_URL)
export default {
  dialect: 'postgresql',
  out: './drizzle', // Onde as migrations serão salvas
  schema: './src/infra/db/schema.js', // Onde nosso schema será criado
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
};
