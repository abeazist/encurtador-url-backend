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

  async createLink({ urlOriginal, legenda }) {
    // Gera o código curto para idLinkEncurtado
    const idLinkEncurtado = this.gerarCodigoEncurtado(6);

    const novoLink = await this.linkRepository.create({
      idLinkEncurtado,
      urlOriginal: urlOriginal, 
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

  gerarCodigoEncurtado(tamanho = 6) {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let resultado = '';
  for (let i = 0; i < tamanho; i++) {
    resultado += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }
  return resultado;
}

}

