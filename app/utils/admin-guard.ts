import { db } from "@/prisma/db";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "./auth";

// Returnerar sessionen bara om den tillhör GitHub-kontot i ADMIN_GITHUB_ID.
// Kontrollen görs mot kontot i databasen och inte bara mot att en session finns.
export async function getAdminSession() {
  const adminGithubId = process.env.ADMIN_GITHUB_ID;
  if (!adminGithubId) return null;

  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) return null;

  const adminAccount = await db.account.findFirst({
    where: {
      userId: session.user.id,
      providerId: "github",
      accountId: adminGithubId,
    },
  });

  return adminAccount ? session : null;
}

// För sidor: skickar icke-inloggade till /login
export async function requireAdmin() {
  const session = await getAdminSession();
  if (!session) redirect("/login");
  return session;
}

// För server actions: avbryter anropet
export async function assertAdmin() {
  const session = await getAdminSession();
  if (!session) throw new Error("Unauthorized");
  return session;
}
