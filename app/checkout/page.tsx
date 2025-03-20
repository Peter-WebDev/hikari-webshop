import CheckoutForm from "../components/checkout/checkout-form";
import CheckoutProducts from "../components/checkout/checkout-products";

export default function CheckoutPage() {
  return (
    <main>
      <CheckoutProducts />
      <CheckoutForm />
    </main>
  );
}
