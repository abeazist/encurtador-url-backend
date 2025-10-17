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
    return this.db.select().from(links);
  }

  // buscar por id
 async findById(id) {
    const result = await this.db.select().from(links).where(eq(links.id, id));
    // Retorna o primeiro resultado ou null se não encontrar
    return result[0] || null;
  }

  async create() {
    const id = randomUUID();
    const result = await this.db.insert(contatos).values({
      id, // ID gerado automaticamente
      ...contatoData, // Demais campos vindos do parâmetro
    }).returning(); // Retorna o registro inserido
    return result[0];
  }


  // Atualiza os dados de um contato existente pelo ID
  async update(id, contatoData) {
    const result = await this.db.update(contatos)
      .set(contatoData) // Define os novos valores
      .where(eq(contatos.id, id)) // Filtra pelo ID
      .returning(); // Retorna o registro atualizado
    return result[0] || null;
  }


  // Remove um contato do banco pelo ID
  // Retorna true se algum registro foi deletado, false caso contrário
  async remove(id) {
    const result = await this.db.delete(contatos)
      .where(eq(contatos.id, id))
      .returning({ id: contatos.id }); // Pede o ID do item deletado de volta

    return result.length > 0;
  }

  // Busca um contato pelo e-mail (útil para evitar duplicidade)
  async findByEmail(email) {
    const result = await this.db.select().from(contatos).where(eq(contatos.email, email));
    return result[0] || null;
  }

 
};

export default LinkRepository;
