"use client";
import { authClient } from "@/app/utils/auth-client";
import LogoutIcon from "@mui/icons-material/Logout";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/");
    router.refresh();
  };

  return (
    <Button
      variant="outlined"
      color="secondary"
      startIcon={<LogoutIcon />}
      onClick={handleLogout}
      data-cy="logout"
    >
      Sign out
    </Button>
  );
}
