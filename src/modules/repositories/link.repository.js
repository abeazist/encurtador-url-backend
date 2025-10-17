// src/modules/repositories/link.repository.js
//repository vai falar com o BD atrav´s do drizzle que é um 
import db from "../../infra/connection.js";
import { eq } from 'drizzle-orm';
import { links } from "../../infra/db/schema.js";

export class LinkRepository {
  constructor() {
    this.db = db;
    
  }


  // listar todos
  async findAll() {
    return  await this.db.select().from(links);
  }

  // buscar por id
 async findById(id) {
    const result = await this.db.select().from(links).where(eq(links.id, id));
    return result[0] || null;
  }

  async create() {
    const result = await this.db.insert(links).values({
      idLinkEncurtado: { url_original, legenda }.idLinkEncurtado, // código encurtado gerado no service
      legenda: { url_original, legenda }.legenda,
      url_original: { url_original, legenda }.url_original,
    }).returning(); 
    return result[0];
  }


  // Atualiza os dados de um contato existente pelo ID
  async update(id, links) {
    const result = await this.db.update(links)
      .set({ url_original, legenda })// Define os novos valores
      .where(eq(links.id, id)) // Filtra pelo ID
      .returning(); // Retorna o registro atualizado
    return result[0] || null;
  }


  
  // Retorna true se algum registro foi deletado, false caso contrário
  async remove(id) {
    const result = await this.db.delete(links)
      .where(eq(links.id, id))
      .returning({ id: links.id }); // Pede o ID do item deletado de volta

    return result.length > 0;
  }

 
 
};

export default LinkRepository;
