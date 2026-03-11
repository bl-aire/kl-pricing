import { useQuery } from "@tanstack/react-query";
import { pricingClient, castAxiosError } from "@/helpers/request";

import { InsightParams, IntelligenceResponse, AnalysisResponse, FiltersResponse, CommoditiesResponse, PaginatedPriceResponse, PaginatedGapAnalysisResponse, PaginatedOtherSourcesResponse, AdvisorResponse, PriceComparisonResponse } from "./pricing.types";

//@: Get prices
export const GET_PRICES_QKEY = "/prices/filtered";

async function getPrices(params:InsightParams):Promise<PaginatedPriceResponse>{
    try {
        const { page, page_size, commodity, market } = params; //search
        //const urlParams = `?search=${search}&commodity=${commodity}&market=${market}&page=${page}&page_size=${page_size}`;
        const urlParams = `?commodity=${commodity}&market=${market}&page=${page}&page_size=${page_size}`;
        const res = await pricingClient.get(`prices/filtered/${urlParams}`);
        return res.data;
    } catch (error) {
        const err = castAxiosError(error);
        const message = err.response?.data.message ?? err.message;
        throw message;
    }
}
export function useGetPrices(params:InsightParams){
    return useQuery({
        queryKey: [GET_PRICES_QKEY, params],
        queryFn: () => getPrices(params),
        refetchOnWindowFocus: true,
    });
}

//@: Get other sources
export const GET_OTHER_SOURCES_QKEY = "/other-sources/filtered";

async function getOtherSources(params:InsightParams):Promise<PaginatedOtherSourcesResponse>{
    try {
        const { page, page_size, commodity, location } = params;
        const urlParams = `?page=${page}&page_size=${page_size}&commodity=${commodity}&location=${location}`;
        const res = await pricingClient.get(`/other-sources/filtered${urlParams}`);
        return res.data;
    } catch (error) {
        const err = castAxiosError(error);
        const message = err.response?.data.message ?? err.message;
        throw message;
    }
}
export function useGetOtherSources(params:InsightParams){
    return useQuery({
        queryKey: [GET_OTHER_SOURCES_QKEY, params],
        queryFn: () => getOtherSources(params),
        refetchOnWindowFocus: true,
    });
}

//@: Get intelligence
export const GET_INTELLIGENCE_QKEY = "/intelligence";
async function getIntelligence({commodity}:{commodity: string | null}):Promise<IntelligenceResponse>{
    try {
        const res = await pricingClient.get(`/intelligence/${commodity}`);
        return res.data ?? {};
    } catch (error) {
        const err = castAxiosError(error);
        const message = err.response?.data.message ?? err.message;
        throw message;
    }
}

export function useGetIntelligence({commodity}:{commodity: string | null}){
    return useQuery({
        queryKey: [GET_INTELLIGENCE_QKEY, commodity],
        queryFn: () => getIntelligence({commodity}),
        refetchOnWindowFocus: true,
        enabled: !!commodity,
    });
}

//@: Get market advisor
export const GET_ADVISOR_QKEY = "/ai-market-advisor";
async function getAdvisor({commodity}:{commodity: string | null}):Promise<AdvisorResponse>{
    try {
        const res = await pricingClient.get(`/ai-market-advisor/${commodity}`);
        return res.data ?? {};
    } catch (error) {
        const err = castAxiosError(error);
        const message = err.response?.data.message ?? err.message;
        throw message;
    }
}

export function useGetAdvisor({commodity}:{commodity: string | null}){
    return useQuery({
        queryKey: [GET_ADVISOR_QKEY, commodity],
        queryFn: () => getAdvisor({commodity}),
        refetchOnWindowFocus: true,
        enabled: !!commodity,
    });
}

//@: Get analysis
export const GET_ANALYSIS_QKEY = "/analysis";

async function getAnalysis(params:InsightParams):Promise<AnalysisResponse>{
    try {
        const { page, page_size, commodity, month, market } = params;
        const urlParams = `?page=${page}&page_size=${page_size}&commodity=${commodity}&month=${month}&market=${market}`;
        const res = await pricingClient.get(`/analysis${urlParams}`);
        return res.data ?? [];
    } catch (error) {
        const err = castAxiosError(error);
        const message = err.response?.data.message ?? err.message;
        throw message;
    }
}
export function useGetAnalysis(params:InsightParams){
    return useQuery({
        queryKey: [GET_ANALYSIS_QKEY, params],
        queryFn: () => getAnalysis(params),
        refetchOnWindowFocus: true,
    });
}

//@: Get Gap Analysis
export const GET_GAP_ANALYSIS_QKEY = "/gap-analysis";

async function getGapAnalysis(params:InsightParams):Promise<PaginatedGapAnalysisResponse>{
    try {
        const { page, page_size, month, market } = params;
        const urlParams = `?page=${page}&page_size=${page_size}&month=${month}&market=${market}`;
        const res = await pricingClient.get(`/gap-analysis${urlParams}`);
        return res.data;
    } catch (error) {
        const err = castAxiosError(error);
        const message = err.response?.data.message ?? err.message;
        throw message;
    }
}
export function useGetGapAnalysis(params:InsightParams){
    return useQuery({
        queryKey: [GET_GAP_ANALYSIS_QKEY, params],
        queryFn: () => getGapAnalysis(params),
        refetchOnWindowFocus: true,
    });
}

//@: Get filters
export const GET_FILTERS_QKEY = "/filters";

async function getFilters():Promise<FiltersResponse>{
    try {
        const res = await pricingClient.get(`/filters/all`);
        return res.data ?? {};
    } catch (error) {
        const err = castAxiosError(error);
        const message = err.response?.data.message ?? err.message;
        throw message;
    }
}
export function useGetFilters(){
    return useQuery({
        queryKey: [GET_FILTERS_QKEY],
        queryFn: () => getFilters(),
        refetchOnWindowFocus: true,
    });
}

//@: Get commodities
export const GET_COMMODITIES_QKEY = "/filters/commodities";

async function getCommodities():Promise<CommoditiesResponse>{
    try {
        const res = await pricingClient.get(`/filters/commodities`);
        return res.data ?? {};
    } catch (error) {
        const err = castAxiosError(error);
        const message = err.response?.data.message ?? err.message;
        throw message;
    }
}
export function useGetCommodities(){
    return useQuery({
        queryKey: [GET_COMMODITIES_QKEY],
        queryFn: () => getCommodities(),
        refetchOnWindowFocus: true,
    });
}

//@: Compare Market Prices
export const GET_COMPARE_PRICES_QKEY = "/compare-two-markets";

async function getComparePrices(params:InsightParams):Promise<PriceComparisonResponse>{
    try {
        const { commodity, market1, market2, month } = params;
        const urlParams = `?commodity=${commodity}&market1=${market1}&market2=${market2}&month=${month}`;
        const res = await pricingClient.get(`/compare-two-markets${urlParams}`);
        return res.data;
    } catch (error) {
        const err = castAxiosError(error);
        const message = err.response?.data.message ?? err.message;
        throw message;
    }
}
export const useGetComparePrices = (params:InsightParams) => {
    return useQuery({
        queryKey: [GET_COMPARE_PRICES_QKEY, params],
        queryFn: () => getComparePrices(params),
        refetchOnWindowFocus: true, 
        enabled: false,
    });
}