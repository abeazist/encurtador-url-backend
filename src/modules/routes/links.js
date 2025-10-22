import LinkRepository from "../repositories/link.repository.js";
import { LinkService } from "../services/service.js";
import { LinkController } from "../controllers/link.controller.js"

const repository = new LinkRepository();
const service = new LinkService(repository);
const controller = new LinkController(service);

export async function linkRoutes(fastify, options) {
  
  fastify.post("/api/links", (req, reply) => controller.createLink(req, reply));

  fastify.get("/api/links", (req, reply) => controller.getLink(req, reply));

 
  fastify.get("/api/links/:id", (req, reply) => controller.getLinkById(req, reply));
  fastify.put("/api/links/:id", (req, reply) => controller.updateLink(req, reply));
  fastify.delete("/api/links/:id", (req, reply) => controller.deleteLink(req, reply));

  fastify.get("/:idLinkEncurtado", (req, reply) => controller.redirectLink(req, reply));
}
