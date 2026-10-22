import { db } from "@/prisma/db";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { APIError } from "better-auth/api";
import { nextCookies } from "better-auth/next-js";

// Endast detta GitHub-konto (numeriskt id, inte användarnamn) får vara admin
const adminGithubId = process.env.ADMIN_GITHUB_ID;

export const auth = betterAuth({
  database: prismaAdapter(db, { provider: "postgresql" }),
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
  },
  databaseHooks: {
    account: {
      create: {
        // Avbryter inloggningen (och rullar tillbaka användaren) för alla andra
        before: async (account) => {
          if (!adminGithubId || account.accountId !== adminGithubId) {
            throw new APIError("FORBIDDEN", {
              message: "This GitHub account is not allowed to sign in.",
            });
          }
        },
      },
    },
  },
  // Måste ligga sist i listan
  plugins: [nextCookies()],
});
