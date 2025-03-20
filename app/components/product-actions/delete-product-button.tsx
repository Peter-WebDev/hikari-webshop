"use client";

import { deleteProduct } from "@/app/actions";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button, IconButton, Modal, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DeleteProductButton({ productId }: { productId: string }) {
    const router = useRouter();
    const [isDeleting, setIsDeleting] = useState(false);
    
    //Lagt till en useState för att hantera om modulen är öppen. Confirm har ersatts med mui modal som öppnas vid klick på papperskorgen och stängs vid Avbryt. 
    //När man trycker på Ta bort så körs handleDelete() som tar bort prod och stänger modalen. 
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const handleDelete = async (): Promise<void> => {
            try {
            setIsDeleting(true);
            await deleteProduct(productId);

            router.refresh();
            handleClose();

        } catch (error) {
            console.error("Error deleting product:", error);
            alert("Error deleting product. Please try again later.");
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <>
        <IconButton
        color="error"
        data-cy="admin-remove-product"
        onClick={handleOpen} //Bytt ut fr handleDelete till handleOpen så att modalen öppnas direkt
        disabled={isDeleting}
        aria-label="Delete product"
        >
            <DeleteIcon />
        </IconButton>

  {/* MUI Modal för bekräftelse */}
  <Modal open={open} onClose={handleClose} aria-labelledby="delete-modal-title">
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 400,
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 2,
                        textAlign: "center",
                    }}
                >
                    <Typography id="delete-modal-title" variant="h6">
                        Are you sure you want to delete this product?
                    </Typography>

                    <Box sx={{ mt: 3, display: "flex", justifyContent: "space-between" }}>
                        <Button data-cy="confirm-delete-button" variant="contained" color="error" onClick={handleDelete}>
                            Yes, Delete
                        </Button>
                        <Button variant="outlined" onClick={handleClose}>
                            Cancel
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </>
    );
}