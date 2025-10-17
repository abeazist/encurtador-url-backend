export class LinkController {
    constructor(service) {
        this.service = service;
    }


    async getLink(request, reply) {
        const links = this.service.getAllLinks();
        return reply.send(links);
    }

    async getLinkById(request, reply) {
        const { id } = request.params;
        const link = this.service.getLinkById(id);

        if (!link) {
            return reply.code(404).send({ message: "Link não encontrado" });
        }
        return reply.send(link);

    }

    async createLink(request, reply) {
        const { url_original, legenda } = request.body
        const novoLink = this.service.createLink({ url_original, legenda });
        return reply.code(201).send(novoLink);
    }

    async updateLink(request, reply) {
        const { id } = request.params;
        const linkAtualizado = this.service.updateLink(
            id,
            request.body
        );

        if (!linkAtualizado) {
            return reply.code(404).send({ message: "link não encontrado" });
        }
        return reply.send(linkAtualizado);
    }

    async deleteLink(request, reply) {
        const { id } = request.params
        const sucesso = this.service.deleteLink(id);
        if (!sucesso) {
            return reply.code(404).send({ message: "Contato não encontrado" });
        }
        return reply.code(204).send();
    
}

    async redirectLink(request, reply) {
    const { codigo } = request.params
    const url_original = await this.service.getUrlOriginal(codigo);

    if (!url_original) {
        return reply.code(404).send({ message: "Link não encontrado" });
    }

    return reply.status(302).redirect(url_original);
}

}