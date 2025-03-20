import { db } from "@/prisma/db";
import { Suspense } from "react";
import EditProductForm from "../../../components/edit-product/edit-product-form";

// Server component
export default async function EditProductPage({ params }: { params: { id?: string } }) {
  // Await the params to resolve them first
  const resolvedParams = await params;
  const id = resolvedParams.id;

  return (
    <Suspense fallback={<div>Loading product...</div>}>
      <ProductContent id={id} />
    </Suspense>
  );
}

// Server Component to fetch the product
async function ProductContent({ id }: { id?: string }) {
  if (!id) {
    return <div>Error: No product ID provided</div>;
  }

  try {
    const product = await db.product.findUnique({
      where: { id },
    });

    if (!product) {
      return <div>Error: Product not found</div>;
    }

    return (
      <main>
        <EditProductForm product={product} />
      </main>
    );
  } catch (error) {
    console.error("Error fetching product:", error);
    return <div>Error fetching product</div>;
  }
}