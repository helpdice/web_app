import { Content } from "@helpdice/sdk";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchArticles = async (queryParams: any) => {
    const [, category, search] = queryParams.queryKey;
    const config = {
        params: {
            category,
            search
        }
    };
    const { data } = await Content.articles(config);
    console.log('Articles :', data);
    return data;
};

export const useArticles = (category?: string, search?: string) => {
    return useInfiniteQuery({
        queryKey: ['articles', category, search],
        queryFn: fetchArticles,
        initialPageParam: '',
        getNextPageParam: (lastPage: any) => lastPage?.paging?.hasMore && lastPage.paging.next
    });
};

const fetchArticle = async (queryParams: any) => {
    const [, slug] = queryParams.queryKey;
    // const config = {
    //     params: {
    //         slug
    //     }
    // };
    const { data } = await Content.article(slug);
    return data.article;
};

export const useArticle = (slug: string) => {
    return useQuery({
        queryKey: ['article', slug],
        queryFn: fetchArticle,
        enabled: !!slug
    });
};

const fetchArticleCategories = async (queryParams: any) => {
    const [, slug] = queryParams.queryKey;
    // const config = {
    //     params: {
    //         slug
    //     }
    // };
    const { data } = await Content.articleCategories();
    return data.categories;
};

export const useArticleCategories = () => {
    return useQuery({
        queryKey: ['article-categories',],
        queryFn: fetchArticleCategories,
    });
};

const fetchAllArticles = async (queryParams: any) => {
    const [, slug] = queryParams.queryKey;
    const { data } = await Content.articles();
    // console.log(data);
    return data.articles;
};

export const useAllArticles = (slug?: string) => {
    return useQuery({
        queryKey: ['all-articles', slug],
        queryFn: fetchAllArticles
    });
};