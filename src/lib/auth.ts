import { createAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/drizzle";
import { db } from "@/db/index";
import * as schema from "@/db/schema";

export const auth = createAuth({
  adapter: drizzleAdapter(db, { users: schema.users }),
  session: { secret: process.env.AUTH_SECRET! },
  emailPassword: { enabled: true },
  pages: { signIn: "/login" },
});

export type Session = Awaited<ReturnType<typeof auth.getSession>>;
