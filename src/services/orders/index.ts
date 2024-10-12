import { useQuery } from "@tanstack/react-query";
import { apiClient, castAxiosError } from "@/helpers/request";

import { PublicOrder } from "./orders.types";

//@: Get orders
export const GET_PUBLIC_ORDERS_QKEY = "/orders/public";
async function getPublicOrders():Promise<PublicOrder[]>{
    try {
        const res = await apiClient.get(`/orders`);
        return res.data;
    } catch (error) {
        const err = castAxiosError(error);
        const message = err.response?.data.message ?? err.message;
        throw message;
    }
}
export function useGetPublicOrders(){
    return useQuery({
        queryKey: [GET_PUBLIC_ORDERS_QKEY],
        queryFn: () => getPublicOrders(),
        refetchOnWindowFocus: true,
    });
}