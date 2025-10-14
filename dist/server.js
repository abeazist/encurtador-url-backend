"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const cors_1 = __importDefault(require("@fastify/cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, fastify_1.default)();
const PORT = process.env.PORT || 3000;
app.register(cors_1.default, {
    origin: [process.env.FRONTEND_URL || "*"],
});
// rota simples de teste
app.get("/", async () => {
    return { message: "🚀 API Encurtador de Links funcionando!" };
});
// inicia o servidor
app.listen({ port: Number(PORT), host: "0.0.0.0" })
    .then(() => console.log(` Servidor rodando na porta ${PORT}`))
    .catch(err => {
    console.error("Erro ao iniciar servidor:", err);
    process.exit(1);
});
