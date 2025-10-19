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
      .values({ idLinkEncurtado, urlOriginal, legenda })
      .returning();

    return result[0];
  }

  async update(id, { urlOriginal, legenda }) {
    const result = await this.db
      .update(links)
      .set({ urlOriginal, legenda })
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

  async incrementClicks(id) {
    await this.db.none("UPDATE links SET clicks = clicks + 1 WHERE id = $1", [id]);
  }
}

export default LinkRepository;
