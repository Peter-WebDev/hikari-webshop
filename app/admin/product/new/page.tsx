import { requireAdmin } from "@/app/utils/admin-guard";
import AddProductForm from "../../../components/add-product/add-product-form";

export const dynamic = "force-dynamic";

export default async function AddProductPage() {
  await requireAdmin();

  return (
    <main>
      <AddProductForm />
    </main>
  );
}
