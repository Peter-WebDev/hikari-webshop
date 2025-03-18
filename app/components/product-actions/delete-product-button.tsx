"use client";

import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

export default function DeleteProductButton({ productId }: { productId: string }) {
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