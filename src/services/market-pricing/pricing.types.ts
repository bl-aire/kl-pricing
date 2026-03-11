export interface InsightParams {
    //search?: string | null;
    page?: number;
    page_size?: number;
    commodity?: string | null;
    month?: string | null;
    market?: string | null;
    location?: string | null;
    year?: number | null;
    market1?: string | null;
    market2?: string | null;
}

export interface IntelligenceResponse {
    commodity: string;
    intelligence?: {
        desc: string;
        markets: string;
        abundance: string;
        note: string
    }
}

export interface AdvisorResponse {
    commodity: string;
    advice: string;
    confidence: string;
    market_insights: {
        average_price: number;
        data_points: number;
        price_range: {
            min: number;
            max: number;
        }
        volatility: string;
        recommendations: {
            market: string;
            price_per_kg: number;
            reason: string;
            type: string;
        }[];
        trend: string;
        trend_percentage: number;
    }
}

export interface AnalysisResponse {
    chart_data: {
        commodity: string;
        market: string;
        price_per_bag: number;
        price_per_kg: number;
        start_time: string;
    }[];
    metrics: {
        price_per_kg: {
            avg: number;
            max: number;
            min: number;
        }
        price_per_bag: {
            avg: number;
            max: number;
            min: number;
        }
    };
    strategic_sourcing: {
        best_buy: {
            market: string;
            price_per_kg: number;
            price_per_bag: number;
        }
        worst_market: {
            market: string;
            price_per_kg: number;
            price_per_bag: number;
        }
    }
}

export interface PriceResponse {
    agent_code: string;
    availability: string;
    commodity: string;
    commodity_type: string;
    market: string;
    price_per_bag: number;
    price_per_kg: number;
    start_time: string;
    state: string;
    weight_of_bag_kg: number;
}

export interface PaginatedPriceResponse {
    data: PriceResponse[];
    pagination?: {
        page: number;
        page_size: number;
        total_records: number;
        total_pages: number;
        has_next: boolean;
        has_prev: boolean;
    }
}

export interface GapAnalysisResponse {
    commodity: string;
    min_price: number;
    max_price: number;
    avg_price: number;
    cheapest_source: string;
    top_selling_market: string;
}

export interface PaginatedGapAnalysisResponse {
    data: GapAnalysisResponse[];
    pagination?: {
        page: number;
        page_size: number;
        total_records: number;
        total_pages: number;
        has_next: boolean;
        has_prev: boolean;
    }
}

export interface OtherSourcesResponse {
    date: string;
    commodity: string;
    location: string;
    unit: string;
    price: number;
}

export interface PaginatedOtherSourcesResponse {
    data: OtherSourcesResponse[];
    pagination?: {
        page: number;
        page_size: number;
        total_records: number;
        total_pages: number;
        has_next: boolean;
        has_prev: boolean;
    }
}

export interface FiltersResponse {
    commodities: string[];
    markets: string[];
    states: string[];
    years: string[];
    months: string[];
    other_sources: {
        locations: string[];
        commodities: string[];
    }
}

export interface CommoditiesResponse {
    commodiites: string[];
}

export interface PriceComparisonResponse {
    success: boolean;
    commodity: "string";
    month: "string";
    market1: {
        found: boolean;
        source: string;
        avg_price_per_kg: number;
        avg_price_per_bag: number;
        min_price_per_kg: number;
        max_price_per_bag: number;
        record_count: number;
    }[];
    market2: {
        found: boolean;
        source: string;
        avg_price_per_kg: number;
        avg_price_per_bag: number;
        min_price_per_kg: number;
        max_price_per_bag: number;
        record_count: number;
    }[];
    comparison: {
        cheaper_market: string;
        more_expensive_market: string;
        buy_from: {
            market: string;
            avg_price_per_kg: number;
            avg_price_per_bag: number;
            label: string;
        };
        avoid: {
            market: string;
            avg_price_per_kg: number;
            avg_price_per_bag: number;
            label: string;
        };
    };
    market1_status?: {
        found: boolean;
        error: string;
        available_commodities: string[];
    };
    market2_status?: {
        found: boolean;
        error: string;
        available_commodities: string[];
    };
}