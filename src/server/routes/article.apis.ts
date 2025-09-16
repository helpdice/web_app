import { Content } from "@helpdice/sdk";
import { Request, Response } from "express";
import { renderPage } from "../../../render.js";
import { ViteDevServer } from "vite";

/**
 * List of API examples.
 * @route GET /api
 */
export const getAritcle = async (req: Request, res: Response, vite?: ViteDevServer) => {
  const { slug } = req.params;
  try {
    const { data } = await Content.article(slug);
    const { data: cdata } = await Content.articleCategories();
    let title = '';
    let description = '';
    if (data) {
      const article = data?.article;
      // console.log('[SSR] ARTICLE :', article)
      title = `${article.title.substring(0, 58)}...`;
      description = `${`${article.title} : ${article.description}`}`.substring(0, 157);
      // console.log('Article SEO :', title, description);
    }
    await renderPage(req, res, vite!, {
      title,
      description
    },
      {
        article: data?.article,
        categories: cdata?.categories
      });
  } catch (err) {
    return res.status(500).json({
      message: "Internal Server Error"
    })
  }
  return res.status(200).end();
};
