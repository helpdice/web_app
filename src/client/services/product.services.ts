import { Accounting } from "@helpdice/sdk";
import { useQuery } from "@tanstack/react-query";

const fetchProducts = async (queryParams: any) => {
    const [, category] = queryParams.queryKey;
    const config = {
        params: {
            category
        }
    };
    const { data } = await Accounting.items(config);
    return data.products;
};

export const useProducts = (category: string) => {
    return useQuery({
        queryKey: ['products', category],
        queryFn: fetchProducts,
        enabled: !!category
    });
};
