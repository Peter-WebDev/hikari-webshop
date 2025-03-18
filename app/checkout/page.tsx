import {
  default as CheckoutForm,
  default as CheckoutProduct,
} from "../components/checkout/checkout-products";

export default function CheckoutPage() {
  return (
    <main>
      <CheckoutProduct />
      <CheckoutForm />
    </main>
  );
}
