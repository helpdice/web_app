import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
// import { App } from "./App";
import "./index.css";
import { createQueryClient } from "../lib/queryClient";
import { dehydrate, QueryClientProvider } from "@tanstack/react-query";
import * as pkg from "react-helmet-async";
import { initializeSDK } from "@helpdice/sdk";
// import { paths } from "./utils/routes";
import App from "./App";

export async function render(url: string, data?: any) {
  // console.log('SSR: Url', url);
  const helmetContext: any = {};
  const queryClient = createQueryClient();
  const dehydratedState = dehydrate(queryClient);
  const dehydratedJson = JSON.stringify(dehydratedState).replace(/</g, '\\u003c');
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
  // const handler = createStaticHandler(paths);
  // console.log('Request Handler URL', `http://localhost:7456${url}`);
  // const request = new Request(`http://localhost${url}`, {
  //   method: 'GET',
  //   headers: {
  //     accept: 'text/html',
  //   }
  // });
  // const context = await handler.query(request);

  // console.log("[SSR] context from handler.query:", context);

  // if (context instanceof Response) {
  //   // Handle redirects, 404s, or thrown errors here
  //   return {
  //     type: 'response',
  //     response: context,
  //   };
  // }
  // const router = createStaticRouter(handler.dataRoutes, context);

  // console.log("[SSR] matched routes:", context.matches.map(m => m.pathname || m.route.path));

  const app = (
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <QueryClientProvider client={queryClient}>
          <App data={data} />
        </QueryClientProvider>
      </StaticRouter>
    </HelmetProvider>
  );

  const appHtml = ReactDOMServer.renderToString(app);

  const { helmet } = helmetContext;

  console.log("[SSR] helmet.title:", helmet?.title?.toString());
  console.log("[SSR] helmet.meta:", helmet?.meta?.toString());

  return {
    appHtml: appHtml,
    head: helmet?.title ? `
      ${helmet?.title.toString()}
      ${helmet?.meta.toString()}
      ${helmet?.link.toString()}
    ` : '',
    dehydratedState: dehydratedJson,
  }
}
