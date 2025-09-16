import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter, RouterProvider } from "react-router-dom";
// import { App } from "./App";
import "./index.css";
import routes from "./routes";
import { createQueryClient } from "../lib/queryClient";
import { QueryClientProvider, HydrationBoundary } from "@tanstack/react-query";
import { initializeSDK } from "@helpdice/sdk";
import { CartProvider } from "@helpdice/pro";
import * as pkg from "react-helmet-async";
import { UiProvider } from "@helpdice/theme";
import { IconProvider } from "@helpdice/icons";

const container = document.getElementById("app");

const dehydratedState = (window as any).__REACT_QUERY_STATE__;

const queryClient = createQueryClient();

initializeSDK({
  tokenKey: import.meta.env.VITE_TOKEN_KEY,
  apiKey: import.meta.env.VITE_API_KEY,
  apiUrl: import.meta.env.VITE_API_URL,
  appUrl: import.meta.env.VITE_APP_URL,
  firebase: {
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    measurementId: ''
  }
});

const { HelmetProvider } = pkg;

const hasDark = document.documentElement.classList.contains('dark');

const FullApp = () => (
  <React.StrictMode>
    <UiProvider themeType={hasDark ? 'dark' : 'light'}>
      <IconProvider color="oklch(92.8% 0.006 264.531)">
        <QueryClientProvider client={queryClient}>
          <HydrationBoundary state={dehydratedState}>
            <CartProvider>
              <HelmetProvider>
                <HydrationBoundary state={dehydratedState}>
                  <RouterProvider router={routes} />
                </HydrationBoundary>
              </HelmetProvider>
            </CartProvider>
          </HydrationBoundary>
        </QueryClientProvider>
      </IconProvider>
    </UiProvider>
  </React.StrictMode>
);

if (import.meta.hot || !container?.innerText) {
  const root = createRoot(container!);
  root.render(<FullApp />);
} else {
  hydrateRoot(container!, <FullApp />);
}
