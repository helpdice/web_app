import { Content } from '@helpdice/sdk';
import { Request, Response } from 'express';
import { SitemapStream } from 'sitemap';
import { Blog } from '../client/types/blog';
import { MCQ } from '../client/types/mcq';
import { QNA } from '../client/types/qna';

// Replace with your dynamic data source
async function getDynamicRoutes() {
    return [
        { slug: 'vite-ssr-seo', updatedAt: '2025-09-09' },
        { slug: 'react-fast-refresh', updatedAt: '2025-09-01' },
    ];
}

export async function getArticleSitemap(req: Request, res: Response) {
    try {
        const sitemap = new SitemapStream({ hostname: 'https://helpdice.com' });
        const { data } = await Content.articles();
        data?.articles.map((post: Blog) => {
            sitemap.write({ url: `/article/${post.slug}`, lastmod: post.updatedAt })
        });
        sitemap.end();
        res.header('Content-Type', 'application/xml');
        sitemap.pipe(res);
    } catch (error) {
        console.error('[Sitemap] Error generating sitemap:', error);
        res.status(500).send('Internal Server Error');
    }
}

export async function getMcqSitemap(req: Request, res: Response) {
    try {
        const sitemap = new SitemapStream({ hostname: 'https://helpdice.com' });
        const { data } = await Content.allMcqs();
        data?.mcqs.map((mcq: MCQ) => {
            sitemap.write({ url: `/mcq/${mcq.slug}`, lastmod: mcq?.updatedAt })
        });
        sitemap.end();
        res.header('Content-Type', 'application/xml');
        sitemap.pipe(res);
    } catch (error) {
        console.error('[Sitemap] Error generating sitemap:', error);
        res.status(500).send('Internal Server Error');
    }
}

export async function getQnaSitemap(req: Request, res: Response) {
    try {
        const sitemap = new SitemapStream({ hostname: 'https://helpdice.com' });
        const { data } = await Content.qnas();
        data?.qnas.map((qna: QNA) => {
            sitemap.write({ url: `/qna/${qna.slug}`, lastmod: qna.updatedAt })
        });
        sitemap.end();
        res.header('Content-Type', 'application/xml');
        sitemap.pipe(res);
    } catch (error) {
        console.error('[Sitemap] Error generating sitemap:', error);
        res.status(500).send('Internal Server Error');
    }
}

export async function handleSitemap(req: Request, res: Response) {
    try {
        const sitemap = new SitemapStream({ hostname: 'https://helpdice.com' });

        // Static routes
        sitemap.write({ url: '/', priority: 1.0 });
        sitemap.write({ url: '/about', priority: 0.8 });

        // Dynamic routes
        const posts = await getDynamicRoutes();
        posts.forEach((post) => {
            sitemap.write({ url: `/blog/${post.slug}`, lastmod: post.updatedAt });
        });

        sitemap.end();

        res.header('Content-Type', 'application/xml');
        sitemap.pipe(res);
    } catch (error) {
        console.error('[Sitemap] Error generating sitemap:', error);
        res.status(500).send('Internal Server Error');
    }
}
