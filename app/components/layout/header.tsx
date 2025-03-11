"use client";
{
  /* Use client används för att säga till Next.js att hela denna komponent ska renderas i webbläsaren.
  Lades in så vi kan använda useMediaQuery! */
}

import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {
  AppBar,
  Box,
  IconButton,
  Link,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";

const Header: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar position="static" color="primary" sx={{ boxShadow: 2 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ flex: 1 }} />

        {/* Logotypen i mitten */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              lineHeight: 1,
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              fontSize: isSmallScreen ? "2rem" : "4rem",
              fontWeight: "300",
            }}
          >
            <span
              style={{
                fontSize: isSmallScreen ? "1.5rem" : "2rem",
                fontWeight: "400",
              }}
            >
              HIKARI
            </span>
            <span
              style={{
                fontSize: isSmallScreen ? "1rem" : "2rem",
                fontWeight: "400",
              }}
            >
              ヒカリ
            </span>
          </Typography>
        </Box>

        {/* Menyikoner till höger */}
        <Box
          sx={{
            display: "flex",
            gap: 1,
            flex: 1,
            justifyContent: "flex-end",
          }}
        >
          <Link href="/admin">
            <IconButton>
              <AdminPanelSettingsOutlinedIcon
                data-cy="admin-link"
                sx={{ fontSize: isSmallScreen ? "2rem" : "2.5rem" }}
              />
            </IconButton>
          </Link>
          <Link color="inherit" href="/cart">
            <IconButton>
              <ShoppingCartOutlinedIcon
                sx={{ fontSize: isSmallScreen ? "2rem" : "2.5rem" }}
              />
            </IconButton>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
