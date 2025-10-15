import Fastify from "fastify";
import cors from "@fastify/cors";
import dotenv from "dotenv";
import { criarTabelaLinks } from "./infra/schema.js";

dotenv.config();

const app = Fastify();
const PORT = process.env.PORT || 3000;

app.register(cors, {
  origin: [process.env.FRONTEND_URL || "*"],
});

// rota simples de teste
app.get("/", async () => {
  return { message: "🚀 API Encurtador de Links funcionando!" };
});

// inicia o servidor
app.listen({ port: Number(PORT), host: "0.0.0.0" })
  .then(async () => {
    await criarTabelaLinks();
    console.log(`Tô rodando na porta ${PORT}`);
  })
  .catch(err => console.error(err));
