import { CssBaseline } from "@mui/material";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { Jost } from "next/font/google";
import type { Metadata } from "next/types";
import { PropsWithChildren } from "react";
import theme from "../src/theme";
import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import CartProvider from "./providers/cart-provider";
import SnackbarProvider from "./providers/snackbar-provider";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

/* Beskriv din hemsida för sökmotorerna */
export const metadata: Metadata = {
  title: "Webbshoppen",
  description: "Dina favoritprodukter online till en bra pris...",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={jost.variable} suppressHydrationWarning>
      <body className={jost.className}>
        <InitColorSchemeScript attribute="data" defaultMode="system" />
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme} defaultMode="system">
            <CssBaseline enableColorScheme />
            <CartProvider>
              <SnackbarProvider>
                <Header />
                {children}
                <Footer />
              </SnackbarProvider>
            </CartProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
