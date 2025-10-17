export class LinkService {
  constructor(linkRepository) {
    this.linkRepository = linkRepository;
  }

  async getAllLinks() {
    return await this.linkRepository.findAll();
  }

  async getLinkById(id) {
    return await this.linkRepository.findById(id);
  }

  async createLink({ url_original, legenda }) {
    // Gera o código curto para idLinkEncurtado
    const idLinkEncurtado = this.gerarCodigoEncurtado(6);

    const novoLink = await this.linkRepository.create({
      idLinkEncurtado,
      urlOriginal: url_original, // mapeia para o nome do campo do banco
      legenda,
    });

    return novoLink;
  }

  async updateLink(id, { url_original, legenda }) {
    return await this.linkRepository.update(id, {
      urlOriginal: url_original,
      legenda,
    });
  }

  async deleteLink(id) {
    return await this.linkRepository.remove(id);
  }

  async getUrlOriginal(idLinkEncurtado) {
    const link = await this.linkRepository.findByIdLinkEncurtado(idLinkEncurtado);
    return link ? link.urlOriginal : null;
  }

  async gerarCodigoEncurtado(){
    
  }
}

