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

interface QueuedSnackbar {
  id: number;
  message: string;
  Transition: (props: SlideProps) => JSX.Element;
}

const SnackbarContext = createContext({} as SnackbarContextType);

let nextId = 0;

export default function SnackbarProvider({ children }: PropsWithChildren) {
  // Queue of snackbars currently visible, stacked bottom to top
  const [queue, setQueue] = useState<QueuedSnackbar[]>([]);

  const showSnackbar = (
    message: string,
    Transition: (props: SlideProps) => JSX.Element = (props) => (
      <Slide {...props} direction="up" />
    )
  ) => {
    const id = nextId++;
    setQueue((prev) => [...prev, { id, message, Transition }]);
  };

  const handleClose = (id: number, reason?: string) => {
    // MUI's Snackbar fires onClose with reason "clickaway" on the older,
    // still-open instances whenever a new Snackbar mounts in the same
    // portal. Ignore that so only a real timeout/escape closes an entry.
    if (reason === "clickaway") return;
    setQueue((prev) => prev.filter((item) => item.id !== id));
  };

  // Renders one Snackbar per queued message, stacked above each other
  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      {queue.map((item, index) => (
        <Snackbar
          key={item.id}
          data-cy="added-to-cart-toast"
          open
          autoHideDuration={5000}
          onClose={(_event, reason) => handleClose(item.id, reason)}
          message={item.message}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          slots={{ transition: item.Transition }}
          sx={{
            // Stack upward: each older snackbar sits higher than the last
            bottom: `${index * 56 + 24}px !important`,
            "& .MuiSnackbarContent-root": {
              backgroundColor: "secondary.main",
              color: "secondary.contrastText",
              fontSize: "1.2rem",
            },
          }}
        />
      ))}
    </SnackbarContext.Provider>
  );
}

export const useSnackbar = () => useContext(SnackbarContext);
