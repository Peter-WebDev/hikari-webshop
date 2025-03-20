import { db } from "@/prisma/db";
import { Box, Button, Container, Paper, Typography } from "@mui/material";

export default async function ConfirmationPage({
  params,
}: {
  params: { "order-number": string };
}) {
  const order = await db.order.findUnique({
    where: { orderNumber: params["order-number"] },
    include: { customer: true, orderItems: { include: { product: true } } },
  });

  if (!order) {
    return (
      <Container maxWidth="sm">
        <Typography variant="h5">Order not found</Typography>
      </Container>
    );
  }

  return (
    <Container
      component="main"
      maxWidth="sm"
      sx={{ mt: { md: 8, sm: 6, xs: 4 }, mb: 8 }}
    >
      <Paper
        elevation={3}
        sx={{ padding: 3, mt: 4, backgroundColor: "#f7f7f7" }}
      >
        {/*Titel:*/}
        <Typography
          variant="h5"
          fontWeight="bold"
          gutterBottom
          textAlign="center"
        >
          Thanks for your order!
        </Typography>

        <Box sx={{ borderBottom: "1px solid #ccc", my: 2 }}></Box>
        {/*Order Details:*/}
        <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
          Your order details:
        </Typography>

        <Typography variant="body1">
          Order number: {order.orderNumber}
        </Typography>
        <Typography variant="body1">Order items:</Typography>
        {order.orderItems.map((item) => (
          <Typography key={item.id} variant="body2">
            {" "}
            {item.quantity}x {item.product.title} - {item.price}:-
          </Typography>
        ))}
        <Typography variant="body1">
          Total price: {order.totalPrice} SEK
        </Typography>

        <Box sx={{ borderBottom: "1px solid #ccc", my: 2 }}></Box>
        {/*Shipping Information:*/}
        <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
          Your shipping information:
        </Typography>

        <Typography variant="body1">
          Full name: {order.customer.name} {order.customer.name}
        </Typography>
        <Typography variant="body1">
          Address: {order.customer.address}
        </Typography>
        <Typography variant="body1">
          Zipcode: {order.customer.zipCode}
        </Typography>
        <Typography variant="body1">City: {order.customer.city}</Typography>
        <Typography variant="body1">Email: {order.customer.email}</Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Phone: {order.customer.phone}
        </Typography>

        {/*Shop Some More BTN:*/}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          <Button variant="contained" color="primary">
            Shop some more
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
