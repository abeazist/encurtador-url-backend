import db from "../../infra/connection.js";
import { eq } from "drizzle-orm";
import { links } from "../../infra/db/schema.js";

export class LinkRepository {
  constructor() {
    this.db = db;
  }

  async findAll() {
    return await this.db.select().from(links);
  }

  async findById(id) {
    const result = await this.db.select().from(links).where(eq(links.id, id));
    return result[0] || null;
  }

  async create({ idLinkEncurtado, urlOriginal, legenda }) {
    const result = await this.db
      .insert(links)
      .values({ idLinkEncurtado, urlOriginal, legenda, numCliques:0 })
      .returning();

    return result[0];
  }

  async findByIdLinkEncurtado(idLinkEncurtado) {
  const result = await db
    .select()
    .from(links)
    .where(eq(links.idLinkEncurtado, idLinkEncurtado));

  return result[0];
}


  async update(id, { urlOriginal, legenda, numCliques }) {
    const result = await this.db
      .update(links)
      .set({ urlOriginal, legenda, numCliques })
      .where(eq(links.id, id))
      .returning();

    return result[0] || null;
  }

  async remove(id) {
    const result = await this.db
      .delete(links)
      .where(eq(links.id, id))
      .returning({ id: links.id });

    return result.length > 0;
  }

  async findByIdLinkEncurtado(idLinkEncurtado) {
    const result = await this.db
      .select()
      .from(links)
      .where(eq(links.idLinkEncurtado, idLinkEncurtado));

    return result[0] || null;
  }

}

export default LinkRepository;

//- *Service (Serviço):* Assume a responsabilidade da *lógica de negócio*. Se você precisa validar um e-mail, 
//verificar permissões ou enviar uma notificação, é aqui que essa lógica vive. O Serviço não sabe como o banco de dados funciona, ele apenas delega.
//- *Repository (Repositório):* Assume a responsabilidade do *acesso a dados*. É a única camada que sabe "falar" com o banco de dados, seja com SQL puro ou com um ORM. 
// O Controller também é atualizado. Agora ele depende do Service. Assim como o Service, 
// seu construtor cria sua própria dependência, o ContatoService, mantendo o acoplamento forte.