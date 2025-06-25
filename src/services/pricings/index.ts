import { useQuery } from "@tanstack/react-query";
import { apiClient, castAxiosError } from "@/helpers/request";
import { PricingResponse } from "./pricings.types";

export const GET_PRICINGS_QKEY = "/pricings";
async function getPricings():Promise<PricingResponse>{
    try {
        const res = await apiClient.get(`/pricing/all`);
        return res.data.data;
    } catch (error) {
        const err = castAxiosError(error);
        const message = err.response?.data.message ?? err.message;
        throw message;
    }
}
export function useGetPricings(){
    return useQuery({
        queryKey: [GET_PRICINGS_QKEY],
        queryFn: () => getPricings(),
        refetchOnWindowFocus: true,
    });
}
