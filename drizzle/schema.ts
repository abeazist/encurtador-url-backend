import { pgTable, unique, serial, varchar, text, integer, timestamp } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const links = pgTable("links", {
	id: serial().primaryKey().notNull(),
	codigo: varchar({ length: 10 }).notNull(),
	legenda: varchar({ length: 255 }),
	urlOriginal: text("urlOriginal").notNull(),
	clicks: integer().default(0),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
}, (table) => [
	unique("links_codigo_key").on(table.codigo),
]);
