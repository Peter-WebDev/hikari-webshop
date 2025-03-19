"use client";

import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import CartDrawer from "./cart-drawer"; // Importera den nya komponenten

const Header: React.FC = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const toggleSidebar = () => setOpenSidebar(!openSidebar);
  const router = useRouter();

  const handleCheckoutClick = () => {
    router.push("/checkout");
    setOpenSidebar(false);
  };

  return (
    <>
      <AppBar position="static" color="primary" sx={{ boxShadow: 2 }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ flex: 1 }} />
          <Link color="inherit" underline="none" aria-label="Home" href="/">
            <Box
              sx={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                component="h1"
                variant="h1"
                sx={{
                  lineHeight: 1,
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                  fontSize: { md: "2rem", sm: "2rem", xs: "1.5rem" },
                  fontWeight: "300",
                }}
              >
                <span>HIKARI</span>
                <span>ヒカリ</span>
              </Typography>
            </Box>
          </Link>

          <Box
            sx={{
              display: "flex",
              gap: 1,
              flex: 1,
              justifyContent: "flex-end",
            }}
          >
            <Link aria-label="Admin" href="/admin">
              <IconButton aria-label="Admin">
                <AdminPanelSettingsOutlinedIcon
                  data-cy="admin-link"
                  sx={{
                    fontSize: { md: "2.5rem", sm: "2rem", xs: "1.8rem" },
                  }}
                />
              </IconButton>
            </Link>

            <IconButton
              aria-label="Cart"
              data-cy="open-cart-sidebar"
              onClick={toggleSidebar}
            >
              <Badge badgeContent={4} color="secondary">
                <ShoppingCartOutlinedIcon
                  sx={{
                    fontSize: { md: "2.5rem", sm: "2rem", xs: "1.8rem" },
                  }}
                />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <CartDrawer
        openSidebar={openSidebar}
        toggleSidebar={toggleSidebar}
        handleCheckoutClick={handleCheckoutClick}
      />
    </>
  );
};

export default Header;
