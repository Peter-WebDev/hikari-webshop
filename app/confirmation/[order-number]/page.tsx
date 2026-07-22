import { db } from "@/prisma/db";
import { Box, Container, Paper, Typography } from "@mui/material";
import Link from "next/link";

export default async function ConfirmationPage({
  params,
}: {
  params: Promise<{ "order-number": string }>;
}) {
  const { "order-number": orderNumber } = await params;
  const order = await db.order.findUnique({
    where: { orderNumber },
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
        sx={{ padding: 3, mt: 4 }}
      >
        {/*Titel:*/}
        <Typography
          component="h2"
          fontWeight="bold"
          gutterBottom
          textAlign="center"
          sx={{ fontSize: { sm: "1.8rem", xs: "1.5rem" } }}
        >
          Thanks for your order {order.customer.name}!
        </Typography>

        <Box sx={{ borderBottom: "1px solid", borderColor: "divider", my: 2 }}></Box>
        {/*Order Details:*/}
        <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
          Your order details:
        </Typography>

        <Typography variant="body1">
          <strong style={{ fontWeight: 600 }}>Order number:</strong>{" "}
          {order.orderNumber}
        </Typography>
        <Typography variant="body1">
          <strong style={{ fontWeight: 600 }}>Created at:</strong>{" "}
          {new Date(order.createdAt).toLocaleString()}
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 600 }}>
          Order items:
        </Typography>
        {order.orderItems.map((item) => (
          <Typography key={item.id} variant="body2" mb="0.5rem">
            {item.quantity}x {item.product.title} - {item.price}:-
          </Typography>
        ))}
        <Typography variant="body1">
          <strong style={{ fontWeight: 600 }}>Total price:</strong>{" "}
          {order.totalPrice} SEK
        </Typography>

        <Box sx={{ borderBottom: "1px solid", borderColor: "divider", my: 2 }}></Box>

        <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
          Your shipping information:
        </Typography>

        <Typography variant="body1">
          <strong style={{ fontWeight: 600 }}>Full name:</strong>{" "}
          {order.customer.name}
        </Typography>
        <Typography variant="body1">
          <strong style={{ fontWeight: 600 }}>Address:</strong>{" "}
          {order.customer.address}
        </Typography>
        <Typography variant="body1">
          <strong style={{ fontWeight: 600 }}>Zipcode:</strong>{" "}
          {order.customer.zipCode}
        </Typography>
        <Typography variant="body1">
          <strong style={{ fontWeight: 600 }}>City:</strong>{" "}
          {order.customer.city}
        </Typography>
        <Typography variant="body1">
          <strong style={{ fontWeight: 600 }}>Email:</strong>{" "}
          {order.customer.email}
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          <strong style={{ fontWeight: 600 }}>Phone:</strong>{" "}
          {order.customer.phone}
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          <Link href="/">
            <Typography
              variant="button"
              sx={{
                display: "inline-block",
                padding: "8px 16px",
                backgroundColor: "secondary.main",
                color: "secondary.contrastText",
                borderRadius: "4px",
                textAlign: "center",
                textDecoration: "none",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "secondary.light",
                },
              }}
            >
              Shop more
            </Typography>
          </Link>
        </Box>
      </Paper>
    </Container>
  );
}
