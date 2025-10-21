import { pgTable, serial, varchar, timestamp, integer } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const links = pgTable("links", {
  id: serial("id").primaryKey().notNull(),
  idLinkEncurtado: varchar("id_link_encurtado", { length: 255 }).notNull(),
  legenda: varchar("legenda", { length: 255 }).notNull(),
  urlOriginal: varchar("url_original", { length: 255 }).notNull(),
  dataCriacao: timestamp("data_criacao", { mode: "string" }).defaultNow(),
  numCliques: integer("num_cliques").default(sql`0`).notNull(), // 👈 usa sql`0`
});
