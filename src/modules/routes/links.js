import LinkRepository from "../repositories/link.repository.js";
import { LinkService } from "../services/service.js";
import { LinkController } from "../controllers/link.controller.js";

const repository = new LinkRepository();
const service = new LinkService(repository);
const controller = new LinkController(service);

export async function linkRoutes(fastify, options) {
  // Listar todos os links
  fastify.get("/api/links", async (request, reply) => {
    return controller.getLink(request, reply);
  });

  // Criar link
  fastify.post("/api/links", async (request, reply) => {
    return controller.createLink(request, reply);
  });

  // Redirecionar link encurtado
  fastify.get("/:idLinkEncurtado", async (request, reply) => {
    return controller.redirectLink(request, reply);
  });

  // CRUD
  fastify.get("/api/links/:id", async (request, reply) => {
    return controller.getLinkById(request, reply);
  });

  fastify.put("/api/links/:id", async (request, reply) => {
    return controller.updateLink(request, reply);
  });

  fastify.delete("/api/links/:id", async (request, reply) => {
    return controller.deleteLink(request, reply);
  });
}
