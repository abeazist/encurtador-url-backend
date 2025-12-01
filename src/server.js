// conecta tudo e inicia o servidor
import Fastify from "fastify";
import cors from "@fastify/cors";
import dotenv from "dotenv";
import { linkRoutes } from "./modules/routes/links.js";

dotenv.config();

const app = Fastify();
const PORT = process.env.PORT || 8000;


await app.register(cors, {
  origin: "https://encurtador-url-frontend-dun.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE"],
});


app.get("/", async () => {
  return { message: "API Encurtador de Links funcionando!" };
});


app.register(linkRoutes);

app.listen({ port: PORT }, (err, PORT) => {
  if (err) throw err;
  console.log(`Servidor rodando em ${PORT}`);
});
