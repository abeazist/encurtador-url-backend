import { pgTable, serial, varchar, timestamp } from "drizzle-orm/pg-core";

export const links = pgTable("links", {
  id: serial("id").primaryKey(),
  idLinkEncurtado: varchar("codigo", { length: 255 }).notNull(),
  legenda: varchar("legenda", { length: 255 }).notNull(),
  urlOriginal: varchar("url_original", { length: 255 }).notNull(),
  dataCriacao: timestamp("data_criacao", { mode: "string" }).defaultNow(),
});
