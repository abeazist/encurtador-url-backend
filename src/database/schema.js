import { pgTable, serial, text, integer } from "drizzle-orm/pg-core";

export const links = pgTable("links", {
  id: serial("id").primaryKey(),

});
