import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  ListItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Link from "next/link";

interface Product {
  id: string;
  title: string;
  image: string;
  price: number;
}

interface SidebarProps {
  openSidebar: boolean;
  toggleSidebar: () => void;
  products: Product[];
  handleCheckoutClick: () => void;
}

const Sidebar = ({
  openSidebar,
  toggleSidebar,
  products,
  handleCheckoutClick,
}: SidebarProps) => {
  return (
    <Drawer anchor="right" open={openSidebar} onClose={toggleSidebar}>
      <Box>
        <TableHead>
          <TableRow>
            <TableCell>Choosen products:</TableCell>
          </TableRow>
        </TableHead>

        <TableContainer component={Paper} sx={{ boxShadow: 2 }}>
          <Table>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <img
                      src={product.image}
                      alt={product.title}
                      style={{
                        width: 50,
                        height: 50,
                        objectFit: "cover",
                        borderRadius: 4,
                      }}
                    />
                  </TableCell>
                  <TableCell
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 1,
                    }}
                  >
                    <IconButton aria-label="remove" sx={{ padding: "0" }}>
                      <RemoveCircleOutlineIcon
                        fontSize="small"
                        color="secondary"
                      />
                    </IconButton>
                    <Typography component="span" fontSize="small">
                      1
                    </Typography>
                    <IconButton aria-label="add">
                      <AddCircleOutlineIcon
                        fontSize="small"
                        color="secondary"
                      />
                    </IconButton>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="body2" fontWeight="bold">
                      {product.price}:-
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box
          sx={{
            mt: 2,
            borderTop: "1px solid #ddd",
            pt: 2,
            textAlign: "left",
            paddingLeft: 2,
          }}
        >
          <Typography variant="body1">
            <strong>Subtotal:</strong> 1580:-
          </Typography>
          <Typography variant="body1">
            <strong>Shipping fee:</strong> 0:-
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: "bold", mt: 1 }}>
            Total: 1580:-
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          width: 250,
          display: "flex",
          flexDirection: "column",
          paddingTop: 2,
        }}
      >
        <Link data-cy="cart-link" href={"/checkout"}>
          <ListItem>
            <Button variant="contained" onClick={handleCheckoutClick}>
              CHECK OUT
            </Button>
          </ListItem>
        </Link>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
