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
                path: "/privacy-policy",
                async lazy() {
                    let PrivacyPolicy = await import("@/pages/privacy-policy");
                    return {Component: PrivacyPolicy.default}
                },
            },
            {
                path: "/cookie-policy",
                async lazy() {
                    let CookiePolicy = await import("@/pages/cookie-policy");
                    return {Component: CookiePolicy.default}
                },
            },
            {
                path: "/terms-and-conditions",
                async lazy() {
                    let TermsAndConditions = await import("@/pages/terms-and-conditions");
                    return {Component: TermsAndConditions.default}
                },
            },
        ],
        errorElement: <ErrorBoundary />,
    }
])