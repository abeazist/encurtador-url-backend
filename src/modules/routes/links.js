// src/modules/routes/link.routes.js
import LinkRepository from "../repositories/link.repository.js";
import LinkService from "../services/service.js";
import LinkController from "../controllers/link.controller.js";

const repository = LinkRepository; // já é um objeto exportado
const service = new LinkService(repository); // este sim é uma classe
const controller = new LinkController(service); // idem

export async function linkRoutes(fastify, options) {
  fastify.get("/api/links", async (request, reply) => {
    return controller.getLinks(request, reply);
  });

  fastify.post("/api/links", async (request, reply) => {
    return controller.createLink(request, reply);
  });

  fastify.delete("/api/links/:id", async (request, reply) => {
    return controller.deleteLink(request, reply);
  });

  fastify.get("/api/links/:id", async (request, reply) => {
    return controller.getLinkById(request, reply);
  });

  fastify.put("/api/links/:id", async (request, reply) => {
    return controller.updateLink(request, reply);
  });

  fastify.get("/:code", async (request, reply) => {
    return controller.redirectToURL(request, reply);
  });
}
