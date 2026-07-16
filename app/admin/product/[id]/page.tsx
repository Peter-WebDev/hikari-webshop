import { db } from "@/prisma/db";
import { Suspense } from "react";
import EditProductForm from "../../../components/edit-product/edit-product-form";

// Server component
export default async function EditProductPage({ params }: { params: Promise<{ id?: string }> }) {
  // Await the params to resolve them first
  const resolvedParams = await params;
  const articleNumber = resolvedParams.id;

  return (
    <Suspense fallback={<div>Loading product...</div>}>
      <ProductContent articleNumber={articleNumber} />
    </Suspense>
  );
}

// Server Component to fetch the product
async function ProductContent({ articleNumber }: { articleNumber?: string }) {
  if (!articleNumber) {
    return <div>Error: No product ID provided</div>;
  }

  try {
    const product = await db.product.findUnique({
      where: { articleNumber: articleNumber },
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