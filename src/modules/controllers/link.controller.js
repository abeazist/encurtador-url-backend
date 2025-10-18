export class LinkController {
    constructor(service) {
        this.service = service;
    }

    isValidUrl(url) {
        try {
            new URL(url);
            return true;
        } catch (err) {
            return false;
        }
    }

    async getLink(request, reply) {
        const links = await this.service.getAllLinks();
        return reply.send(links);
    }

    async getLinkById(request, reply) {
        const { id } = request.params;
        const link = await this.service.getLinkById(id);

        if (!link) {
            return reply.code(404).send({ message: "Link não encontrado" });
        }
        return reply.send(link);

    }

   
  //  async createLink(request, reply) {
    //    const { url_original, legenda } = request.body;

    //    try {
    //        const novoLink = await this.service.createLink({
    //            urlOriginal: url_original, // ⚠️ atenção ao nome
   //             legenda,
    //        });
    //        return reply.code(201).send(novoLink);
    //    } catch (error) {
    //        console.error("Erro ao criar link:", error); // 👈 aqui você verá o erro real no terminal
    //        return reply.code(500).send({ message: "Erro ao criar link" });
    //    }
        // const { url_original, legenda } = request.body
        // const novoLink = await this.service.createLink({ urlOriginal: url_original, legenda });
        // return reply.code(201).send(novoLink);

    //}


async createLink(request, reply) {
        const { url_original, legenda } = request.body;

        // Testando validação url
        if (!this.isValidUrl(url_original)) {
            return reply.code(400).send({
                message: "URL inválida. Use um formato válido, ex: https://exemplo.com"
            });
        }

        try {
            const novoLink = await this.service.createLink({
                urlOriginal: url_original,
                legenda,
            });
            return reply.code(201).send(novoLink);
        } catch (error) {
            console.error("Erro ao criar link:", error);
            return reply.code(500).send({ message: "Erro ao criar link" });
        }
    }



    async updateLink(request, reply) {
        const { id } = request.params;
        const linkAtualizado = await this.service.updateLink(
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
        const sucesso = await this.service.deleteLink(id);
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