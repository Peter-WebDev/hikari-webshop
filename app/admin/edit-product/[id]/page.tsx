import { db } from "@/prisma/db";
import EditProductForm from "../../../components/edit-product/edit-product-form";

export default async function EditProductPage({ params }: { params: { id?: string } }) {
  console.log("Params received:", params);

  if (!params.id) {
    return <div>Error: No product ID provided</div>;
  }

  const product = await db.product.findUnique({
    where: { id: params.id },
  });

  if (!product) {
    return <div>Error: Product not found</div>;
  }

  return (
    <main>
      <EditProductForm product={product} />
    </main>
  );
}