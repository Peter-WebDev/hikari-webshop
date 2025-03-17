import { db } from "@/prisma/db";
import EditProductForm from "./EditProductForm";

export default async function EditProductPage({ params }: { params: { id: string } }) {
  const product = await db.product.findUnique({
      where: { id: params.id },
  });

  if (!product) {
      return <h2>Product not found</h2>;
  }

  return (
      <div>
          <h2>TESTRUBRIK EDIT PRODUCT</h2>
          <EditProductForm product={product} />
      </div>
  );
}