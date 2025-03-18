"use client";

import { deleteProduct } from "@/app/actions";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DeleteProductButton({ productId }: { productId: string }) {
    const router = useRouter();
    const [isDeleting, setIsDeleting] = useState(false);


    const handleDelete = async (): Promise<void> => {
        if (!confirm("Are you sure you want to delete this product?")) {
            return;
        }

        try {
            setIsDeleting(true);
            await deleteProduct(productId);

            router.refresh();

        } catch (error) {
            console.error("Error deleting product:", error);
            alert("Error deleting product. Please try again later.");
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <IconButton
            color="error"
            data-cy="admin-remove-product"
            onClick={handleDelete}
            disabled={isDeleting}
            aria-label="Delete product"
        >
            <DeleteIcon />
        </IconButton>
    );
}