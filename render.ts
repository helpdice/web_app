import type { Request, Response } from "express";
import fs from "fs/promises";
// import dotenv from 'dotenv';
import path, { dirname } from "path";
// import express from "express";
// import compression from "compression";
// import serveStatic from "serve-static";
import { ViteDevServer } from "vite";
import { fileURLToPath, pathToFileURL } from "url";
// import { render } from "./src/client/entry-server";
// import { handleSitemap, getArticleSitemap, getMcqSitemap, getQnaSitemap } from "./src/server/sitemap.js";
// import { initializeSDK } from "@helpdice/sdk";
// import articleRouter from "./src/server/routes/article.apis.js";

type MetaData = {
  title: string;
  description: string;
  ogImage?: string;
  [key: string]: string | undefined;
};

type SSRRenderProps = {
  [key: string]: any;
};

export async function renderPage(
  req: Request,
  res: Response,
  vite?: ViteDevServer,
  meta?: MetaData,
  ssrProps?: SSRRenderProps
) {
  const isProd = process.env.NODE_ENV === "production";
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const url = req.originalUrl;

  const resolve = (p: string) => path.resolve(__dirname, p);
  
  const getStyleSheets = async () => {
    try {
      const assetpath = resolve("public");
      const files = await fs.readdir(assetpath);
      const cssAssets = files.filter(l => l.endsWith(".css"));
      const allContent = [];
      for (const asset of cssAssets) {
        const content = await fs.readFile(path.join(assetpath, asset), "utf-8");
        allContent.push(`<style type="text/css">${content}</style>`);
      }
      return allContent.join("\n");
    } catch {
      return "";
    }
  };

  try {
    // 1. Read index.html
    let baseTemplate = await fs.readFile(isProd ? resolve("client/index.html") : resolve("index.html"), "utf-8");
    const productionBuildPath = path.join(__dirname, "./server/entry-server.js");
    const devBuildPath = path.join(__dirname, "./src/client/entry-server.tsx");
    const buildModule = isProd ? productionBuildPath : devBuildPath;
    const { render } = isProd ? await import(pathToFileURL(productionBuildPath).href) : await vite!.ssrLoadModule(buildModule);
    const { appHtml, head } = await render(url, ssrProps);
    const stylesheets = getStyleSheets();

    // console.log('[SSR] Head :', head);

    const metaTags = `
      <title>${meta?.title}</title>
      <meta name="description" content="${meta?.description}" />
      ${meta?.ogImage ? `<meta property="og:image" content="${meta.ogImage}" />` : ''}
    `;

    baseTemplate = baseTemplate.replace('<!--head-tags-->', meta ? metaTags : head);
    // 2. Apply Vite HTML transforms. This injects the Vite HMR client, and
    //    also applies HTML transforms from Vite plugins, e.g. global preambles
    //    from @vitejs/plugin-react
    const template = isProd ? baseTemplate : await vite!.transformIndexHtml(url, baseTemplate);
    // 3. Load the server entry. vite.ssrLoadModule automatically transforms
    //    your ESM source code to be usable in Node.js! There is no bundling
    //    required, and provides efficient invalidation similar to HMR.

    // 4. render the app HTML. This assumes entry-server.js's exported `render`
    //    function calls appropriate framework SSR APIs,
    //    e.g. ReactDOMServer.renderToString()

    const cssAssets = await stylesheets;

    // 5. Inject the app-rendered HTML into the template.
    const html = template
      .replace(`<!--app-html-->`, appHtml)
      .replace(`<!--head-->`, `${cssAssets}`)
    // .replace('<!--scripts-->', `<script>window.__REACT_QUERY_STATE__ = ${JSON.stringify(dehydratedState)};</script>`);

    // 6. Send the rendered HTML back.
    res.status(200).set({ "Content-Type": "text/html" }).end(html);
  } catch (e: any) {
    // vite.ssrFixStacktrace(e);
    console.error('SSR Error:', e.stack);
    res.status(500).end(e.stack);
  }
}
