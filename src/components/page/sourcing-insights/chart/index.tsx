import { useState } from "react";
import { Grid, Stack, Text, Paper, Group, Box, Radio, Card } from "@mantine/core";
import { AreaChart } from '@mantine/charts';

import styles from "./chart.module.scss";
import FormSelect from "@/components/base/forms/formSelect";

import leaf from "@/assets/leaf.png";
import ai from "@/assets/ai.png";
import star from "@/assets/star2.png";

import { useGetAnalysis, useGetIntelligence, useGetFilters, useGetAdvisor } from "@/services/market-pricing/pricing";


export default function Chart() {
    const [commodity, setCommodity] = useState<string>("Millet");
    const [market, setMarket] = useState<string>("All Markets");
    const [month, setMonth] = useState<string>("January");
    const [perKg, setPerKg] = useState<boolean>(true);

    const filters = useGetFilters();

    const { data: analysisData, status } = useGetAnalysis({
        page: 1,
        page_size: 100,
        commodity: commodity || "Millet",
        month: month || "January",
        market: market || "All Markets"
    });

    const { data: intelligenceData } = useGetIntelligence({
        commodity: commodity || "Millet"
    });

    const { data: advisorData } = useGetAdvisor({
        commodity: commodity || "Millet"
    });

    const commodityOptions = filters.data?.commodities.map((c) => ({
        label: c,
        value: c
    })) || [];

    const marketOptions = [
        { label: "All Markets", value: "All Markets" },
        ...(filters.data?.markets.map((m) => ({
            label: m,
            value: m
        })) || []),
    ];

    const months = filters.data?.months.map(m => ({
        label: m,
        value: m
    })) || [];

    const avgPrice = perKg ? analysisData?.metrics?.price_per_kg.avg : analysisData?.metrics.price_per_bag.avg.toLocaleString("en", { minimumFractionDigits: 2 });
    const maxPrice = perKg ? analysisData?.metrics?.price_per_kg.max : analysisData?.metrics.price_per_bag.max.toLocaleString("en", { minimumFractionDigits: 2 });
    const minPrice = perKg ? analysisData?.metrics?.price_per_kg.min : analysisData?.metrics.price_per_bag.min.toLocaleString("en", { minimumFractionDigits: 2 });
    const bestBuyPrice = perKg ? analysisData?.strategic_sourcing?.best_buy?.price_per_kg : analysisData?.strategic_sourcing?.best_buy?.price_per_bag.toLocaleString("en", { minimumFractionDigits: 2 });
    const worstMarketPrice = perKg ? analysisData?.strategic_sourcing?.worst_market?.price_per_kg : analysisData?.strategic_sourcing?.worst_market?.price_per_bag.toLocaleString("en", { minimumFractionDigits: 2 });

    const chartData =
        analysisData?.chart_data
            .sort((a, b) => new Date(a.start_time).getTime() - new Date(b.start_time).getTime())
            .map(d => ({
                date: new Date(d.start_time),
                displayDate: new Date(d.start_time).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short",
                }),
                "Price/kg": d.price_per_kg ?? 0,
                "Price/bag": d.price_per_bag ?? 0,
                market: d.market || "N/A",
            })) || [];

    const activeKey = perKg ? "Price/kg" : "Price/bag";

    const { yMin, yMax } = (() => {
        if (!chartData.length) {
            return { yMin: 0, yMax: 100 };
        }

        const values = chartData.map((d) => d[activeKey] ?? 0);

        const min = Math.min(...values);
        const max = Math.max(...values);

        const padding = (max - min) * 0.15 || max * 0.1;

        return {
            yMin: Math.max(0, min - padding),
            yMax: max + padding,
        };
    })();

    if (status == "pending") {
        return (
            <Box w="100%" className={styles.container}>
                <Grid>
                    <Grid.Col span={{ base: 12, md: 8 }}>
                        <Paper className={styles.loader}>
                            <Group justify="space-between">
                                <Box className={styles.loader__label} />
                                <Group>
                                    <Box className={styles.loader__button} />
                                    <Box className={styles.loader__button} />
                                    <Box className={styles.loader__button} />
                                </Group>
                            </Group>

                            <Box className={styles.loader__rect} />
                        </Paper>
                    </Grid.Col>

                    <Grid.Col span={{ base: 12, md: 4 }}>
                        <Paper className={styles.loader}>
                            <Box className={styles.loader__label} />
                            <Box className={styles.loader__rect} />
                        </Paper>
                    </Grid.Col>
                </Grid>
            </Box>
        )
    }

    if (!analysisData || !analysisData.chart_data || analysisData.chart_data.length === 0) {
        return (
            <Box w="100%" className={styles.container}>
                <Grid>
                    <Grid.Col span={{ base: 12, md: 8 }}>
                        <Paper className={styles.empty}>
                            <Box className={styles.empty__img} />
                            <Grid align="center">
                                <Grid.Col span={{ base: 12, md: 3 }}>
                                    <FormSelect
                                        withAsterisk
                                        data={commodityOptions}
                                        placeholder="Select a commodity"
                                        label="Commodity"
                                        searchable
                                        size="md"
                                        value={commodity}
                                        onChange={(value) => setCommodity(value || "")}
                                    />
                                </Grid.Col>
                                <Grid.Col span={{ base: 12, md: 3 }}>
                                    <FormSelect
                                        withAsterisk
                                        searchable
                                        data={marketOptions}
                                        placeholder="Select a market"
                                        label="Market"
                                        size="md"
                                        value={market}
                                        onChange={(value) => setMarket(value || "")}
                                    />
                                </Grid.Col>
                                <Grid.Col span={{ base: 12, md: 3 }}>
                                    <FormSelect
                                        withAsterisk
                                        data={months}
                                        placeholder="Select a month"
                                        label="Month"
                                        size="md"
                                        searchable
                                        value={month}
                                        onChange={(value) => setMonth(value || "")}
                                    />
                                </Grid.Col>
                                <Grid.Col span={{ base: 12, md: 3 }}>
                                    <Radio.Group
                                        value={perKg ? "kg" : "bag"}
                                        onChange={(value) => setPerKg(value === "kg")}

                                    >
                                        <Group mt={30} align="center">
                                            <Radio label="Per Bag" value="bag" size="xs" />
                                            <Radio label="Per Kg" value="kg" size="xs" />
                                        </Group>
                                    </Radio.Group>
                                </Grid.Col>
                            </Grid>
                            <Text className={styles.empty__stack} fw={400} fz="md" mt={50} ta="center">
                                No data available for this commodity
                            </Text>
                        </Paper>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 4 }}>
                        <Stack gap={20} h="100%">
                            <Paper className={styles.chart} h="60%">
                                <Stack justify="space-between">
                                    <Group align="center">
                                        <img src={ai} alt="AI icon" />
                                        <Text size="sm" tt="uppercase" fw={400} c="#92e3a9">
                                            {commodity} Intelligence
                                        </Text>
                                    </Group>

                                    <Stack align="left">
                                        <Text size="xs" fw={300}>
                                            Insights and analysis on market prices, trends, and sourcing opportunities to help you make informed trading decisions.
                                        </Text>
                                    </Stack>

                                    <Stack align="left">
                                        <Group>
                                            <Text size="xs" fw={400}>
                                                Description:
                                            </Text>
                                            <Text size="xs" fw={300} c="dimmed">
                                                {intelligenceData?.intelligence?.desc}
                                            </Text>
                                        </Group>
                                        <Group>
                                            <Text size="xs" fw={400}>
                                                Primary Markets:
                                            </Text>
                                            <Text size="xs" fw={300} c="dimmed">
                                                {intelligenceData?.intelligence?.markets}
                                            </Text>
                                        </Group>
                                        <Group>
                                            <Text size="xs" fw={400}>
                                                Abundance:
                                            </Text>
                                            <Text size="xs" fw={300} c="dimmed">
                                                {intelligenceData?.intelligence?.abundance}
                                            </Text>
                                        </Group>
                                        <Group>
                                            <Text size="xs" fw={400}>
                                                Note:
                                            </Text>
                                            <Text size="xs" fw={300} c="dimmed">
                                                {intelligenceData?.intelligence?.note}
                                            </Text>
                                        </Group>
                                    </Stack>
                                </Stack>
                            </Paper>
                            <Paper className={styles.chart} h="40%">
                                <Stack justify="space-between">
                                    <Group align="center">
                                        <img src={star} alt="Star icon" />
                                        <Text size="sm" tt="uppercase" fw={400} c="#2955C5">
                                            Market Advisor
                                        </Text>
                                    </Group>

                                    <Stack align="left">
                                        <Text size="xs" fw={300} c="dimmed">
                                            {advisorData?.advice}
                                        </Text>
                                    </Stack>
                                </Stack>
                            </Paper>
                        </Stack>
                    </Grid.Col>
                </Grid>
            </Box>
        )
    }

    return (
        <Box className={styles.container} w="100%">
            <Grid>
                <Grid.Col span={{ base: 12, md: 8 }}>
                    <Paper className={styles.chart}>
                        <Stack gap="lg">

                            <Grid align="center">
                                <Grid.Col span={{ base: 12, md: 3 }}>
                                    <FormSelect
                                        withAsterisk
                                        data={commodityOptions}
                                        placeholder="Select a commodity"
                                        label="Commodity"
                                        searchable
                                        size="md"
                                        value={commodity}
                                        onChange={(value) => setCommodity(value || "")}
                                    />
                                </Grid.Col>
                                <Grid.Col span={{ base: 12, md: 3 }}>
                                    <FormSelect
                                        withAsterisk
                                        searchable
                                        data={marketOptions}
                                        placeholder="Select a market"
                                        label="Market"
                                        size="md"
                                        value={market}
                                        onChange={(value) => setMarket(value || "")}
                                    />
                                </Grid.Col>
                                <Grid.Col span={{ base: 12, md: 3 }}>
                                    <FormSelect
                                        withAsterisk
                                        data={months}
                                        placeholder="Select a month"
                                        label="Month"
                                        size="md"
                                        searchable
                                        value={month}
                                        onChange={(value) => setMonth(value || "")}
                                    />
                                </Grid.Col>
                                <Grid.Col span={{ base: 12, md: 3 }}>
                                    <Radio.Group
                                        value={perKg ? "kg" : "bag"}
                                        onChange={(value) => setPerKg(value === "kg")}

                                    >
                                        <Group mt={30} align="center">
                                            <Radio label="Per Bag" value="bag" size="xs" />
                                            <Radio label="Per Kg" value="kg" size="xs" />
                                        </Group>
                                    </Radio.Group>
                                </Grid.Col>
                            </Grid>
                            {analysisData && (
                                <Box w="100%" style={{ overflow: 'hidden' }}>
                                    <AreaChart
                                        h={300}
                                        data={chartData}
                                        withLegend
                                        dataKey="displayDate"
                                        withYAxis
                                        yAxisProps={{
                                            domain: [yMin, yMax],
                                        }}
                                        strokeDasharray="6 6"
                                        series={[
                                            {
                                                name: activeKey,
                                                color: "orange.6",
                                            },
                                        ]}
                                        valueFormatter={(value) =>
                                            new Intl.NumberFormat("en-US").format(value)
                                        }
                                        curveType="natural"
                                        connectNulls={false}
                                        tooltipProps={{
                                            content: ({ label, payload }) => {
                                                if (!payload?.length) return null;
                                                const { market } = payload[0].payload;
                                                const value = payload[0].value;
                                                return (
                                                    <Paper px="sm" py="xs" radius="sm" shadow="sm">
                                                        <Stack gap={2}>
                                                            <Text size="sm" c="dimmed">{label}</Text>
                                                            <Text size="sm" fw={500}>Market: {market}</Text>
                                                            <Text size="sm" fw={500}>
                                                                {perKg ? "Price/kg: " : "Price/bag: "}
                                                                {new Intl.NumberFormat("en-US").format(value)}
                                                            </Text>
                                                        </Stack>
                                                    </Paper>
                                                );
                                            },
                                        }}
                                    />
                                </Box>
                            )}
                        </Stack>
                    </Paper>
                </Grid.Col>

                <Grid.Col span={{ base: 12, md: 4 }}>
                    <Stack gap={20} h="100%">
                        <Paper className={styles.chart} h="60%">
                            <Stack justify="space-between">
                                <Group align="center">
                                    <img src={ai} alt="AI icon" />
                                    <Text size="sm" tt="uppercase" fw={400} c="#92e3a9">
                                        {commodity} Intelligence
                                    </Text>
                                </Group>

                                <Stack align="left">
                                    <Text size="xs" fw={400}>
                                        Insights and analysis on market prices, trends, and sourcing opportunities to help you make informed trading decisions.
                                    </Text>
                                </Stack>

                                <Stack align="left">
                                    <Group gap={5}>
                                        <Text size="xs" fw={400}>
                                            Description:
                                        </Text>
                                        <Text size="xs" fw={400} c="dimmed">
                                            {intelligenceData?.intelligence?.desc}
                                        </Text>
                                    </Group>
                                    <Group gap={5}>
                                        <Text size="xs" fw={400}>
                                            Primary Markets:
                                        </Text>
                                        <Text size="xs" fw={400} c="dimmed">
                                            {intelligenceData?.intelligence?.markets}
                                        </Text>
                                    </Group>
                                    <Group gap={5}>
                                        <Text size="xs" fw={400}>
                                            Abundance:
                                        </Text>
                                        <Text size="xs" fw={400} c="dimmed">
                                            {intelligenceData?.intelligence?.abundance}
                                        </Text>
                                    </Group>
                                    <Group gap={5}>
                                        <Text size="xs" fw={400}>
                                            Note:
                                        </Text>
                                        <Text size="xs" fw={400} c="dimmed">
                                            {intelligenceData?.intelligence?.note}
                                        </Text>
                                    </Group>
                                </Stack>
                            </Stack>
                        </Paper>
                        <Paper className={styles.chart} h="40%">
                            <Stack justify="space-between">
                                <Group align="center">
                                    <img src={star} alt="Star icon" />
                                    <Text size="sm" tt="uppercase" fw={400} c="#2955C5">
                                        Market Advisor
                                    </Text>
                                </Group>

                                <Stack align="left">
                                    <Text size="xs" fw={400} c="dimmed">
                                        {advisorData?.advice}
                                    </Text>
                                </Stack>
                            </Stack>
                        </Paper>

                    </Stack>

                </Grid.Col>
            </Grid>
            <Stack gap="md" mt={50}>
                <Text size="lg" tt="uppercase" fw={400}>
                    Kasuwa Trading Prices
                </Text>

                <Grid align="stretch">
                    <Grid.Col span={{ base: 12, xl: 12 }}>
                        <Card h="100%" p={0}>
                            <Grid align="stretch">
                                <Grid.Col span={{ base: 12, md: 12, xl: 2 }}>
                                    <Paper className={styles.metrics}>
                                        <Stack className={`${styles.metrics__content1} ${styles.metrics__content}`} justify="space-between">
                                            <Text size="md" fw={500} tt="uppercase">Avg. Price</Text>
                                            <Group className={`${styles.metrics__content1__group} ${styles.metrics__content__group}`} justify="space-between">
                                                <Text size="lg" fw={600}>&#x20A6;{avgPrice}</Text>
                                                <img src={leaf} alt="Leaf icon" className={`${styles.metrics__content1__group__leaf} ${styles.metrics__content__group__leaf}`} />
                                            </Group>
                                        </Stack>
                                    </Paper>
                                </Grid.Col>
                                <Grid.Col span={{ base: 12, md: 12, xl: 2 }}>
                                    <Paper className={styles.metrics}>
                                        <Stack className={`${styles.metrics__content2} ${styles.metrics__content}`} justify="space-between">
                                            <Text size="md" fw={500} tt="uppercase">Max. Price</Text>
                                            <Group className={`${styles.metrics__content2__group} ${styles.metrics__content__group}`} justify="space-between">
                                                <Text size="lg" fw={600}>&#x20A6;{maxPrice}</Text>
                                                <img src={leaf} alt="Leaf icon" className={`${styles.metrics__content2__group__leaf} ${styles.metrics__content__group__leaf}`} />
                                            </Group>
                                        </Stack>
                                    </Paper>
                                </Grid.Col>
                                <Grid.Col span={{ base: 12, md: 12, xl: 2 }}>
                                    <Paper className={styles.metrics}>
                                        <Stack className={`${styles.metrics__content3} ${styles.metrics__content}`} justify="space-between">
                                            <Text size="md" fw={500} tt="uppercase">Min. Price</Text>

                                            <Group className={`${styles.metrics__content3__group} ${styles.metrics__content__group}`} justify="space-between">
                                                <Text size="lg" fw={600}>&#x20A6;{minPrice}</Text>
                                                <img src={leaf} alt="Leaf icon" className={`${styles.metrics__content3__group__leaf} ${styles.metrics__content__group__leaf}`} />
                                            </Group>
                                        </Stack>
                                    </Paper>
                                </Grid.Col>

                                <Grid.Col span={{ base: 12, md: 12, xl: 6 }}>
                                    <Paper className={styles.metrics}>
                                        <Stack className={`${styles.metrics__content4} ${styles.metrics__content}`} justify="space-between">
                                            <Group className={`${styles.metrics__content4__group} ${styles.metrics__content__group}`} justify="space-between">
                                                <Text size="md" fw={500} tt="uppercase">Best Market To Buy From: {commodity}</Text>
                                                <img src={leaf} alt="Leaf icon" className={`${styles.metrics__content4__group__leaf} ${styles.metrics__content__group__leaf}`} />
                                            </Group>
                                            <Group className={`${styles.metrics__content4__group} ${styles.metrics__content__group}`} justify="space-between" align="center">
                                                <Stack>
                                                    <Text size="lg" fw={300} c="dimmed">Cheapest Market: {analysisData?.strategic_sourcing?.best_buy?.market}</Text>
                                                    <Group justify="space-between">
                                                        <Text size="lg" fw={600}> {perKg ? "Best(Avg/Kg):" : "Best(Avg/Bag):"}</Text>
                                                        <Text size="lg" fw={600}>&#x20A6;{bestBuyPrice}</Text>
                                                    </Group>
                                                </Stack>
                                                <Stack>
                                                    <Text size="lg" fw={300} c="dimmed">Highest Market: {analysisData?.strategic_sourcing?.worst_market?.market}</Text>
                                                    <Group justify="space-between">
                                                        <Text size="lg" fw={600}>{perKg ? "Highest(Avg/Kg):" : "Highest(Avg/Bag):"}</Text>
                                                        <Text size="lg" fw={600}>&#x20A6;{worstMarketPrice}</Text>
                                                    </Group>
                                                </Stack>
                                            </Group>
                                        </Stack>
                                    </Paper>
                                </Grid.Col>
                            </Grid>
                        </Card>
                    </Grid.Col>
                </Grid>
            </Stack>
        </Box>
    )
}


