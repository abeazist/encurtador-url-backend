import Fastify from "fastify";
import cors from "@fastify/cors";
import dotenv from "dotenv";
import { linkRoutes } from "./modules/routes/links.js";

dotenv.config();

const app = Fastify();
const PORT = process.env.PORT || 8000;

await app.register(cors, {
  origin: ["*"],
  methods: ["GET", "POST", "PUT", "DELETE"],
});

// Global hook that adds CORS headers to every response. This covers
// environments where the Fastify CORS plugin may not be applied
// (for example some serverless runtimes or edge proxies).
app.addHook('onSend', async (request, reply, payload) => {
  reply.header('Access-Control-Allow-Origin', '*');
  reply.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  reply.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  return payload;
});


app.get("/", async () => {
  return { message: "API Encurtador de Links funcionando!" };
});

app.register(linkRoutes);

await app.listen({ port: process.env.PORT, host: "0.0.0.0" });
console.log(`Servidor rodandinho em http://0.0.0.0:${PORT}`);
