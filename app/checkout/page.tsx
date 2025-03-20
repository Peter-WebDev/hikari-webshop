import { default as CheckoutForm } from "../components/checkout/checkout-form";
import CheckoutProducts from "../components/checkout/checkout-products";
import ShopLayout from "../shop-layout";

export default function CheckoutPage() {
  return (
    <main>
      <ShopLayout>
        <CheckoutProducts />
        <CheckoutForm />
      </ShopLayout>
    </main>
  );
}
