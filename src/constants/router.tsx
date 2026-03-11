import { createBrowserRouter } from "react-router-dom";

import Home from "@/pages/home";
import ErrorBoundary from "@/components/utils/errorBoundary";

export const appRouter = createBrowserRouter([
    // --- Public routes ---
    {
        element: "",
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/support",
                async lazy() {
                    let Support = await import("@/pages/support");
                    return {Component: Support.default}
                },
            },
            {
                path: "/market-pricing",
                async lazy() {
                    let MarketPricing = await import("@/pages/market-pricing");
                    return {Component: MarketPricing.default}
                },
            },
            {
                path: "/legal-policies",
                async lazy() {
                    let Legal = await import("@/pages/legal");
                    return {Component: Legal.default}
                },
            },
        ],
        errorElement: <ErrorBoundary />,
    }
])