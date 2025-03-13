"use-client";

import { Box, Button, Container, Paper, TextField, Typography } from "@mui/material";

const AddProductForm = () => {
    return (
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ padding: 3, mt: 4, backgroundColor: "#f7f7f7" }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            New product
          </Typography>
  
          <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField label="Product id" variant="outlined" fullWidth />
            <TextField label="Product name" variant="outlined" fullWidth />
            <TextField label="Price" variant="outlined" fullWidth />
            <TextField label="Product description" variant="outlined" multiline rows={3} fullWidth />
            <TextField label="Image URL" variant="outlined" fullWidth />
  
            <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
              Add new product
            </Button>
          </Box>
        </Paper>
      </Container>
    );
  };
  
  export default AddProductForm;