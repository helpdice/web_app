import { Content } from "@helpdice/sdk";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

const fetchQnas = async (queryParams: any) => {
    const [, category, search] = queryParams.queryKey;
    const config = {
        params: {
            category,
            search
        }
    };
    const { data } = await Content.qnas(config);
    return data;
};

export const useQnas = (category?: string, search?: string) => {
    return useInfiniteQuery({
        queryKey: ['qnas', category, search],
        queryFn: fetchQnas,
        initialPageParam: '',
        getNextPageParam: (lastPage: any) => lastPage?.paging?.hasMore && lastPage.paging.next
    });
};

const fetchQna = async (queryParams: any) => {
    const [, slug] = queryParams.queryKey;
    const { data } = await Content.qna(slug);
    return data.qna;
};

export const useQna = (slug: string) => {
    return useQuery({
        queryKey: ['qna', slug],
        queryFn: fetchQna,
        enabled: !!slug
    });
};

const fetchQnaCategories = async (queryParams: any) => {
    const [, slug] = queryParams.queryKey;
    const { data } = await Content.qnasCategories();
    return data.categories;
};

export const useQnaCategories = () => {
    return useQuery({
        queryKey: ['qna-categories',],
        queryFn: fetchQnaCategories,
    });
};

const fetchAllQnas = async (queryParams: any) => {
    const [, slug] = queryParams.queryKey;
    const { data } = await Content.qnas();
    // console.log(data);
    return data.qnas;
};

export const useAllQnas = (slug?: string) => {
    return useQuery({
        queryKey: ['all-qnas', slug],
        queryFn: fetchAllQnas
    });
};