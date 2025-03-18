"use client";

import { deleteProduct } from "@/app/actions";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { useRouter } from "next/navigation";

export default function DeleteProductButton({ productId }: { productId: string }) {
    const router = useRouter();

    const handleDelete = async (): Promise<void> => {
        if (confirm("Are you sure you want to delete this product?")) {
            await deleteProduct(productId);
            router.refresh();
        }
    };

    return (
        <IconButton
            color="error"
            data-cy="admin-remove-product"
            onClick={handleDelete}
        >
            <DeleteIcon />
        </IconButton>
    );
}