import { getAdminSession } from "@/app/utils/admin-guard";
import { Container, Paper, Typography } from "@mui/material";
import { redirect } from "next/navigation";
import LoginButton from "../components/login/login-button";

export const dynamic = "force-dynamic";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  if (await getAdminSession()) redirect("/admin");

  const { error } = await searchParams;

  return (
    <main>
      <Container
        maxWidth="xs"
        sx={{ mt: { md: 8, sm: 6, xs: 4 }, mb: 8 }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Typography component="h2" variant="h4" fontWeight="bold">
            Admin
          </Typography>
          <Typography align="center">
            Sign in with the GitHub account that is allowed to manage the shop.
          </Typography>
          {error && (
            <Typography color="error" align="center" role="alert">
              Sign in failed. This GitHub account is not allowed to sign in.
            </Typography>
          )}
          <LoginButton />
        </Paper>
      </Container>
    </main>
  );
}
