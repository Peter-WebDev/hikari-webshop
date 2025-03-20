"use client";

import { useCart } from "@/app/providers/cart-provider";
import ShopLayout from "@/app/shop-layout";
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
import React, { useEffect, useState } from "react";
import CartDrawer from "./cart-drawer"; // Importera den nya komponenten

const Header: React.FC = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const toggleSidebar = () => setOpenSidebar(!openSidebar);
  const router = useRouter();

  const handleCheckoutClick = () => {
    router.push("/checkout");
    setOpenSidebar(false);
  };

  const { cartItems } = useCart();
  // Tracks if the component has mounted to prevent hydration errors
  const [mounted, setMounted] = useState(false);

  // Indicates when the component is ready. Initially false (server-rendered), then true after first client render.
  useEffect(() => {
    setMounted(true);
  }, []);

  // Calculates the total amount of all products in the cart
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <ShopLayout>
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
                {/* If mounted === true it renders badge with total amount of products in cart, else if its false we get 0 */}
                {mounted ? (
                  <Badge
                    badgeContent={totalQuantity}
                    color="secondary"
                    showZero
                    data-cy="cart-items-count-badge"
                  >
                    <ShoppingCartOutlinedIcon
                      sx={{
                        fontSize: { md: "2.5rem", sm: "2rem", xs: "1.8rem" },
                      }}
                    />
                  </Badge>
                ) : (
                  <ShoppingCartOutlinedIcon
                    sx={{
                      fontSize: { md: "2.5rem", sm: "2rem", xs: "1.8rem" },
                    }}
                  />
                )}
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        <CartDrawer
          openSidebar={openSidebar}
          toggleSidebar={toggleSidebar}
          handleCheckoutClick={handleCheckoutClick}
        />
      </ShopLayout >
    </>
  );
};

export default Header;
