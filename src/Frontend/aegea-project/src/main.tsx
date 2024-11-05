import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "@radix-ui/themes/styles.css";
import { BaseRoutes } from "./routes.tsx";
import { Theme } from "@radix-ui/themes";
import { ThemeProvider } from "./components/theme-provider.tsx";
import { GlobalStateProvider } from "./global-state-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStateProvider>
      <Theme>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <BaseRoutes />
        </ThemeProvider>
      </Theme>
    </GlobalStateProvider>
  </StrictMode>
);
