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

await app.listen({ port: PORT, host: "0.0.0.0" });
console.log(`Servidor rodandinho em http://0.0.0.0:${PORT}`);
