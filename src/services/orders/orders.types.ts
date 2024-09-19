export interface PublicOrder {
    id: number;
    orderCode: string;
    commodityImage: string;
    commodityName: string;
    price: number;
    quantity: number;
    specification: string;
    duration: string;
    statusName: string;
    state: string;
    createdAt: string;
}