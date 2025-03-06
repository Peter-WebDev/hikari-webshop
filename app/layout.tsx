import "@fontsource/jost/300.css";
import "@fontsource/jost/400.css";
import "@fontsource/jost/500.css";
import "@fontsource/jost/700.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import Link from "next/link";
import type { Metadata } from "next/types";
import { PropsWithChildren } from "react";
import theme from "../src/theme";

/* Beskriv din hemsida för sökmotorerna */
export const metadata: Metadata = {
  title: "Webbshoppen",
  description: "Dina favoritprodukter online till en bra pris...",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "Jost" }}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <header>
              <Link href="/">
                <h1>NextJS webbshop</h1>
              </Link>
            </header>
            {children}
            <footer>
              <p>© 2024</p>
            </footer>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
