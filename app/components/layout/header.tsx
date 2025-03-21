"use client";
import { useCart } from "@/app/providers/cart-provider";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SupervisorAccountOutlinedIcon from "@mui/icons-material/SupervisorAccountOutlined";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Link,
  Toolbar,
  Tooltip,
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
              <Box>
                <Typography
                  component="h1"
                  variant="h1"
                  sx={{
                    lineHeight: 1,
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                    fontSize: { md: "2.5rem", sm: "2.5rem", xs: "2rem" },
                    fontWeight: "300",
                  }}
                >
                  HIKARI
                </Typography>
                <Box
                  component="div"
                  sx={{
                    padding: 0,
                    margin: 0,
                  }}
                >
                  <Typography
                    component="h1"
                    variant="h5"
                    align="center"
                    sx={{
                      fontSize: { md: "2rem", sm: "2rem", xs: "1.5rem" },
                    }}
                  >
                    ヒカリ
                  </Typography>
                </Box>
              </Box>
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
            <Tooltip title="About Hikari">
            <IconButton
              aria-label="About Hikari"
              onClick={() => router.push("/about")}
            >
              <InfoOutlinedIcon
                data-cy="admin-link"
                sx={{
                  fontSize: { md: "2.5rem", sm: "2rem", xs: "1.8rem" },
                }}
              />
            </IconButton>
            </Tooltip>

            <Tooltip title="Admin">
            <IconButton
              aria-label="Admin"
              onClick={() => router.push("/admin")}
            >
              <SupervisorAccountOutlinedIcon
                data-cy="admin-link"
                sx={{
                  fontSize: { md: "2.5rem", sm: "2rem", xs: "1.8rem" },
                }}
              />
            </IconButton>
            </Tooltip>

            <Tooltip title="Cart">
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
            </Tooltip>
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
