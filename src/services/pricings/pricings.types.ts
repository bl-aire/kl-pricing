export interface PricingResponse {
    content: {
        id: number;
        marketName: string;
        location: string;
        percentage: number;
        previousPrice: number;
        price: number;
        commodityName: string;
        commodityImage: string;
        commodityId: string;
        createdAt: string;
        updatedAt: string;
    }[];
    number : number;
    size: number;
    totalElements: number;
    totalPages: number;
}