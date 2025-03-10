import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";

const Header: React.FC = () => {
  return (
    <AppBar position="static" color="primary" sx={{ boxShadow: 2 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logotypen i mitten */}
        <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <Typography variant="h1" sx={{ fontSize: "2rem" }}>
            HIKARI
          </Typography>
        </Box>

        {/* Menyikoner till höger */}
        <Box sx={{ display: "flex", gap: 1 }}>
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
          <IconButton color="inherit">
            <ShoppingCartOutlinedIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
