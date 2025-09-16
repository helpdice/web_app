import { Content } from "@helpdice/sdk";
import { Request, Response } from "express";
import { renderPage } from "../../../render.js";
import { ViteDevServer } from "vite";

/**
 * List of API examples.
 * @route GET /api
 */
export const getMcq = async (req: Request, res: Response, vite?: ViteDevServer) => {
  const { slug } = req.params;
  try {
    const { data } = await Content.mcq(slug);
    const { data: cdata } = await Content.mcqsCategories();
    const { data: allMcq } = await Content.allMcqs();
    // console.log('[SSR] MCQ :', data);
    let title = '';
    let description = '';
    let keywords = '';
    if (data) {
      const mcq = data?.mcq;
      // console.log('[SSR] ARTICLE :', mcq)
      title = mcq.title.length <= 46
        ? `${mcq.title.substring(0, 49)} - Helpdice`
        : `${mcq.title.substring(0, 46)}... - Helpdice`;
      description = `${mcq.title.substring(0, 49)} A: ${mcq.options[0]}, B: ${mcq.options[1]}`;
      keywords = `${mcq.title}`;
      // console.log('MCQ SEO :', title, description);
    }
    await renderPage(req, res, vite!, {
      title,
      description,
      keywords
    },
      {
        mcq: data?.mcq,
        categories: cdata?.categories,
        mcqs: allMcq?.mcqs.splice(0, 10)
      });
  } catch (err) {
    return res.status(500).json({
      message: "Internal Server Error"
    })
  }
  return res.status(200).end();
};