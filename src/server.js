import Fastify from "fastify";
import cors from "@fastify/cors";
import dotenv from "dotenv";
import { linkRoutes } from "./modules/routes/links.js";

dotenv.config();

const app = Fastify();
const PORT = process.env.PORT || 3000;


await app.register(cors, {
  origin: ["http://localhost:5173"], // permite o frontend local
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
