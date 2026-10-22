"use client";
import { authClient } from "@/app/utils/auth-client";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Button } from "@mui/material";

export default function LoginButton() {
  const handleLogin = () =>
    authClient.signIn.social({
      provider: "github",
      callbackURL: "/admin",
      errorCallbackURL: "/login",
    });

  return (
    <Button
      variant="contained"
      color="secondary"
      startIcon={<GitHubIcon />}
      onClick={handleLogin}
      data-cy="login-github"
    >
      Sign in with GitHub
    </Button>
  );
}
