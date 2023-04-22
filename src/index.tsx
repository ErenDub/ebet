import "./index.css";
import "typeface-roboto";
import "./i18n";

import { ThemeProvider } from "@mui/material/styles";
import ErrorBoundary from "other/error/errorBoundary";
import React, { Suspense } from "react";
import { CookiesProvider } from "react-cookie";
import ReactDOM from "react-dom/client";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { muiTheme } from "./other/theme/";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Helmet defaultTitle="e-bet" titleTemplate="%s | e-bet" />
    <BrowserRouter>
      <ThemeProvider theme={muiTheme}>
        <ErrorBoundary>
          <CookiesProvider>
            <QueryClientProvider client={queryClient}>
              <Suspense fallback={null}>
                <Toaster
                  position="top-center"
                  reverseOrder={false}
                  gutter={8}
                  toastOptions={{
                    duration: 3000,
                    loading: {
                      duration: 1000,
                    },
                  }}
                />
                <App />
              </Suspense>
            </QueryClientProvider>
          </CookiesProvider>
        </ErrorBoundary>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
