import Fastify from "fastify";
import cors from "@fastify/cors";
import dotenv from "dotenv";
import { linkRoutes } from "./modules/routes/links.js";

dotenv.config();

const app = Fastify();
const PORT = process.env.PORT || 3000;

app.register(cors, {
  origin: [process.env.FRONTEND_URL || "*"],
});


app.register(linkRoutes); 


app.get("/", async () => {
  return { message: "🚀 API Encurtador de Links funcionando!" };
});

app.listen({ port: Number(PORT), host: "0.0.0.0" })
  .then(async () => {
    console.log(`Tô rodando na porta ${PORT}`);
  })
  .catch(err => console.error(err));
