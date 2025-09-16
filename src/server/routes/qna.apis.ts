import { Content } from "@helpdice/sdk";
import { Request, Response } from "express";
import { renderPage } from "../../../render.js";
import { ViteDevServer } from "vite";

/**
 * List of API examples.
 * @route GET /api
 */
export const getQna = async (req: Request, res: Response, vite?: ViteDevServer) => {
    const { slug } = req.params;
    try {
        const { data } = await Content.qna(slug);
        const { data: cdata } = await Content.qnasCategories();
        const { data: allQnas } = await Content.qnas();
        // console.log('[SSR] MCQ :', data);
        let title = '';
        let description = '';
        let keywords = '';
        if (data) {
            const qna = data?.qna;
            // console.log('[SSR] ARTICLE :', mcq)
            title = qna.question.length <= 46
                ? `${qna.question.substring(0, 49)} - Helpdice`
                : `${qna.question.substring(0, 46)}... - Helpdice`;
            description = `${title} : ${qna.answer}`;
            keywords = `${qna.question}`;
            // console.log('MCQ SEO :', title, description);
        }
        await renderPage(req, res, vite!, {
            title,
            description,
            keywords
        },
            {
                qna: data?.qna,
                categories: cdata?.categories,
                mcqs: allQnas?.qnas.splice(0, 10)
            });
    } catch (err) {
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
    return res.status(200).end();
};