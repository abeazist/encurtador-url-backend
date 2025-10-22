export class LinkController {
  constructor(service) {
    this.service = service;
  }

  isValidUrl(url) {
    if (!url) return false;
    if (url.includes(" ")) return false;
    if (!url.includes(".")) return false;
    const parts = url.split(".");
    if (parts.some(part => part === "")) return false;
    return true;
  }

  async getLink(request, reply) {
    const links = await this.service.getAllLinks();
    return reply.send(links);
  }

  async getLinkById(request, reply) {
    const { id } = request.params;
    const link = await this.service.getLinkById(id);
    if (!link) return reply.code(404).send({ message: "Link não encontrado" });
    return reply.send(link);
  }

  async createLink(request, reply) {
    const { urlOriginal, legenda } = request.body;

    if (!this.isValidUrl(urlOriginal)) {
      return reply.code(400).send({ message: "URL inválida. Use um formato válido" });
    }

    try {
      const novoLink = await this.service.createLink({ urlOriginal, legenda });

      // Adiciona domínio do seu servidor
      const dominio = "https://meuencurtador.onrender.com"; // altere para o seu domínio
      const linkCurto = `${dominio}/${novoLink.idLinkEncurtado}`;

      return reply.code(201).send({ ...novoLink, linkCurto });
    } catch (error) {
      console.error("Erro ao criar link:", error);
      return reply.code(500).send({ message: "Erro ao criar link" });
    }
  }

  async updateLink(request, reply) {
    const { id } = request.params;
    const linkAtualizado = await this.service.updateLink(id, request.body);
    if (!linkAtualizado) return reply.code(404).send({ message: "Link não encontrado" });
    return reply.send(linkAtualizado);
  }

  async deleteLink(request, reply) {
    const { id } = request.params;
    const sucesso = await this.service.deleteLink(id);
    if (!sucesso) return reply.code(404).send({ message: "Link não encontrado" });
    return reply.code(204).send();
  }

  async redirectLink(request, reply) {
    const { idLinkEncurtado } = request.params;
    const urlOriginal = await this.service.getUrlOriginal(idLinkEncurtado);

    if (!urlOriginal) return reply.code(404).send({ message: "Link não encontrado" });

    await this.service.incrementarClicks(idLinkEncurtado);
    return reply.redirect(urlOriginal); // redireciona para o link original
  }
}
