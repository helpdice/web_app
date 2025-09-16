// import { Content } from "@helpdice/sdk";
import { Request, Response } from "express";
import { renderPage } from "../../../render.js";
import { metaTags } from "../../client/utils/meta.js";
import { ViteDevServer } from "vite";


function getMetaData(slug: string) {
    switch (slug) {
        case "logo-designing":
            return {
                title: metaTags.logoDesign.meta_title,
                description: metaTags.logoDesign.meta_description
            }
        case "ux-designing":
            return {
                title: metaTags.uxDesign.meta_title,
                description: metaTags.uxDesign.meta_description
            }
        case "app-development":
            return {
                title: metaTags.appDevelopment.meta_title,
                description: metaTags.appDevelopment.meta_description
            }
        case "digital-marketing":
            return {
                title: metaTags.socialMarketing.meta_title,
                description: metaTags.socialMarketing.meta_description
            }
        case "search-engine-optimization":
            return {
                title: metaTags.seo.meta_title,
                description: metaTags.seo.meta_description
            }
        default:
            return undefined
    }
}
/**
 * List of API examples.
 * @route GET /api
 */
export const getService = async (req: Request, res: Response, vite?: ViteDevServer) => {
    const { slug } = req.params;
    await renderPage(req, res, vite!, getMetaData(slug));
    return res.status(200).end();
};
