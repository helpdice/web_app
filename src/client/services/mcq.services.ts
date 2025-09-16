import { Content } from "@helpdice/sdk";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

const fetchMcqs = async (queryParams: any) => {
    const [, category, search] = queryParams.queryKey;
    const config = {
        params: {
            category,
            search
        }
    };
    const { data } = await Content.mcqs(config);
    return data;
};

export const useMcqs = (category?: string, search?: string) => {
    return useInfiniteQuery({
        queryKey: ['mcqs', category, search],
        queryFn: fetchMcqs,
        initialPageParam: '',
        getNextPageParam: (lastPage: any) => lastPage?.paging?.hasMore && lastPage.paging.next
    });
};

const fetchMcq = async (queryParams: any) => {
    const [, slug] = queryParams.queryKey;
    const { data } = await Content.mcq(slug);
    return data.mcq;
};

export const useMcq = (slug: string) => {
    return useQuery({
        queryKey: ['mcq', slug],
        queryFn: fetchMcq,
        enabled: !!slug
    });
};

const fetchMcqCategories = async (queryParams: any) => {
    const [, slug] = queryParams.queryKey;
    const { data } = await Content.mcqsCategories();
    return data.categories;
};

export const useMcqCategories = () => {
    return useQuery({
        queryKey: ['mcq-categories',],
        queryFn: fetchMcqCategories,
    });
};


const fetchAllMcqs = async (queryParams: any) => {
    const [, slug] = queryParams.queryKey;
    const { data } = await Content.allMcqs();
    // console.log(data);
    return data.mcqs.splice(0, 10);
};

export const useAllMcqs = (slug?: string) => {
    return useQuery({
        queryKey: ['all-mcqs', slug],
        queryFn: fetchAllMcqs
    });
};