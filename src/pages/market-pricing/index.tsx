import { Stack, Title, Text } from "@mantine/core";

import Chart from "@/components/page/sourcing-insights/chart";
import LandingLayout from "@/components/base/layout";
import PriceHistory from "@/components/page/sourcing-insights/price";
import GapHistory from "@/components/page/sourcing-insights/gap";
import OtherSources from "@/components/page/sourcing-insights/others";
import Banner from "@/components/page/sourcing-insights/banner";

import styles from "./market-pricing.module.scss";

import barner2 from "@/assets/banner-truck2.png";
import barner1 from "@/assets/banner-truck.png";

export default function MarketPricing() {
    const currentDate = new Date();
    const currentMonthName = currentDate.toLocaleString('default', {month: 'long'});

    return (
        <LandingLayout>
            <Stack w={"100%"} className={styles.pricing}>
                <Stack gap="xs">
                    <Title order={2} fw={500} c="#364330">
                        Market Prices & Sourcing Insights
                    </Title>
                    <Text size="sm" fw={300}>
                        Track prices and find the best markets to trade.
                    </Text>
                </Stack>
                <Chart />
                <PriceHistory />
                <Banner imageSrc={barner2} title={`Best Buy & Sell Market: ${currentMonthName} 2026`} description={`Download ${currentMonthName} Monthly Intelligence Reports`} />
                <GapHistory />
                <Banner imageSrc={barner1} title="Open Market Price Comparison" description="Compare commodity prices across different markets" />
                <OtherSources />
            </Stack>
        </LandingLayout>
    )
}

