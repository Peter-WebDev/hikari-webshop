import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {
  AppBar,
  Box,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

const Header: React.FC = () => {
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
              fontSize: { md: "2rem", sm: "2rem", xs: "1.5rem" },
              fontWeight: "300",
            }}
          >
            <span>HIKARI</span>
            <span>ヒカリ</span>
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
                sx={{
                  fontSize: { md: "2.5rem", sm: "2rem", xs: "1.8rem" },
                }}
              />
            </IconButton>
          </Link>
          <Link color="inherit" href="/cart">
            <IconButton>
              <ShoppingCartOutlinedIcon
                sx={{
                  fontSize: { md: "2.5rem", sm: "2rem", xs: "1.8rem" },
                }}
              />
            </IconButton>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
