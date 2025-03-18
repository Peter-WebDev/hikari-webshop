"use client";

import { Slide, SlideProps, Snackbar } from "@mui/material";
import {
  createContext,
  JSX,
  PropsWithChildren,
  useContext,
  useState,
} from "react";

// Message: text shown and transition from MUI
interface SnackbarContextType {
  showSnackbar: (
    message: string,
    Transition?: (props: SlideProps) => JSX.Element
  ) => void;
}

const SnackbarContext = createContext({} as SnackbarContextType);

export default function SnackbarProvider({ children }: PropsWithChildren) {
  // Updates state to show snackbar
  // Open: if the snackbar is visible, Message: text shown and transition from MUI that has default slide up
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    Transition: (props: SlideProps) => JSX.Element;
  }>({
    open: false,
    message: "",
    Transition: (props) => <Slide {...props} direction="up" />,
  });

  const showSnackbar = (
    message: string,
    Transition: (props: SlideProps) => JSX.Element = (props) => (
      <Slide {...props} direction="up" />
    )
  ) => {
    setSnackbar({ open: true, message, Transition });
  };

  const handleClose = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  // Snackbar from MUI, placed bottom left and shows for 2sec
  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={2000}
        onClose={handleClose}
        message={snackbar.message}
        key={snackbar.Transition.name}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        slots={{ transition: snackbar.Transition }}
        sx={{
          // Target content in snackbar
          "& .MuiSnackbarContent-root": {
            backgroundColor: "#040404",
            color: "#fff",
            fontSize: "1.2rem",
          },
        }}
      />
    </SnackbarContext.Provider>
  );
}

export const useSnackbar = () => useContext(SnackbarContext);
