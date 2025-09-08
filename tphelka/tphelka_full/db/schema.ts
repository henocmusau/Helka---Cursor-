import { pgTable, serial, varchar, text, timestamp, integer, boolean, date, decimal } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 255 }).unique().notNull(),
  password_hash: text("password_hash").notNull(),
  role: varchar("role", { length: 50 }).notNull().default("fan"),
  created_at: timestamp("created_at").defaultNow(),
});

export const teams = pgTable("teams", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  category: varchar("category", { length: 50 }).notNull(),
});

export const players = pgTable("players", {
  id: serial("id").primaryKey(),
  team_id: integer("team_id").references(() => teams.id, { onDelete: "cascade" }),
  first_name: varchar("first_name", { length: 100 }).notNull(),
  last_name: varchar("last_name", { length: 100 }).notNull(),
  position: varchar("position", { length: 50 }).notNull(),
  jersey_number: integer("jersey_number"),
  birth_date: date("birth_date"),
  photo_url: text("photo_url"),
});

export const staff = pgTable("staff", {
  id: serial("id").primaryKey(),
  team_id: integer("team_id").references(() => teams.id, { onDelete: "cascade" }),
  first_name: varchar("first_name", { length: 100 }).notNull(),
  last_name: varchar("last_name", { length: 100 }).notNull(),
  role: varchar("role", { length: 100 }).notNull(),
});

export const matches = pgTable("matches", {
  id: serial("id").primaryKey(),
  team_id: integer("team_id").references(() => teams.id, { onDelete: "cascade" }),
  opponent: varchar("opponent", { length: 100 }).notNull(),
  is_home: boolean("is_home").notNull(),
  date: timestamp("date").notNull(),
  location: varchar("location", { length: 255 }),
  competition: varchar("competition", { length: 100 }),
});

export const match_results = pgTable("match_results", {
  id: serial("id").primaryKey(),
  match_id: integer("match_id").references(() => matches.id, { onDelete: "cascade" }),
  home_score: integer("home_score"),
  away_score: integer("away_score"),
  status: varchar("status", { length: 50 }).notNull(),
});

export const goals = pgTable("goals", {
  id: serial("id").primaryKey(),
  match_id: integer("match_id").references(() => matches.id, { onDelete: "cascade" }),
  player_id: integer("player_id").references(() => players.id, { onDelete: "set null" }),
  minute: integer("minute").notNull(),
  is_own_goal: boolean("is_own_goal").default(false),
});

export const news = pgTable("news", {
  id: serial("id").primaryKey(),
  author_id: integer("author_id").references(() => users.id, { onDelete: "set null" }),
  title: varchar("title", { length: 255 }).notNull(),
  content: text("content").notNull(),
  published_at: timestamp("published_at").defaultNow(),
  cover_image_url: text("cover_image_url"),
});

export const media = pgTable("media", {
  id: serial("id").primaryKey(),
  news_id: integer("news_id").references(() => news.id, { onDelete: "cascade" }),
  url: text("url").notNull(),
  type: varchar("type", { length: 50 }).notNull(),
});

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
  image_url: text("image_url"),
  category: varchar("category", { length: 100 }),
});

// Relations
export const teamsRelations = relations(teams, ({ many }) => ({
  players: many(players),
  staff: many(staff),
  matches: many(matches),
}));

export const playersRelations = relations(players, ({ one, many }) => ({
  team: one(teams, { fields: [players.team_id], references: [teams.id] }),
  goals: many(goals),
}));

export const staffRelations = relations(staff, ({ one }) => ({
  team: one(teams, { fields: [staff.team_id], references: [teams.id] }),
}));

export const matchesRelations = relations(matches, ({ one, many }) => ({
  team: one(teams, { fields: [matches.team_id], references: [teams.id] }),
  result: one(match_results, { fields: [matches.id], references: [match_results.match_id] }),
  goals: many(goals),
}));

export const matchResultsRelations = relations(match_results, ({ one }) => ({
  match: one(matches, { fields: [match_results.match_id], references: [matches.id] }),
}));

export const goalsRelations = relations(goals, ({ one }) => ({
  match: one(matches, { fields: [goals.match_id], references: [matches.id] }),
  player: one(players, { fields: [goals.player_id], references: [players.id] }),
}));

export const newsRelations = relations(news, ({ one, many }) => ({
  author: one(users, { fields: [news.author_id], references: [users.id] }),
  media: many(media),
}));

export const mediaRelations = relations(media, ({ one }) => ({
  news: one(news, { fields: [media.news_id], references: [news.id] }),
}));

export const usersRelations = relations(users, ({ many }) => ({
  news: many(news),
}));
