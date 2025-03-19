import CheckoutForm from "../components/checkout/checkout-form";
import ShopLayout from "../shop-layout";

export default function CheckoutPage() {
  return (
    <div>
      <ShopLayout>
        <CheckoutForm />
      </ShopLayout>
    </div>
  );
}
