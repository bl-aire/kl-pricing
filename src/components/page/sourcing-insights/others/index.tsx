import { useState, useMemo } from "react";
//import { useForm } from "@mantine/form";
import { DataTable, type DataTableColumn } from 'mantine-datatable';
import { IoSearchOutline, IoDownloadOutline } from "react-icons/io5";
import { Title, Text, Paper, Group, Stack, Box, TextInput, Button, Image } from "@mantine/core"; //Grid, Card

import { useGetOtherSources, useGetFilters } from "@/services/market-pricing/pricing"; //useGetComparePrice
import type { OtherSourcesResponse } from "@/services/market-pricing/pricing.types";

import emptyImg from "@/assets/empty.svg";
import styles from "./others.module.scss";

import { formatDate } from "@/utils/default";
import LoadingTable from "@/components/ui/misc/loadingTable";
import ErrorCard from "@/components/ui/misc/errorCard";
import FormSelect from "@/components/base/forms/formSelect";
//import FormButton from "@/components/base/formButton";

const PAGE_SIZES = [10, 15, 20, 50, 100, 500];

/*interface FormData {
    commodity: string;
    market1: string;
    market2: string;
    month: string;
}*/

export default function OtherSources() {
    const [page, setPage] = useState(1);
    const [page_size, setPage_size] = useState(PAGE_SIZES[0]);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [commodity, setCommodity] = useState<string>("");
    const [location, setLocation] = useState<string>("");
    //const [compareParams, setCompareParams] = useState<InsightParams | null>(null);

    const { data, error, status, refetch } = useGetOtherSources({
        page,
        page_size,
        commodity,
        location
    });

    const filters = useGetFilters();

    const commodityOptions = [
        { label: "All Commodities", value: ""},
        ...(filters.data?.other_sources.commodities.map((c) => ({
        label: c,
        value: c
    })) || []),
    ];

    {/*const commodities = filters.data?.other_sources.commodities.map(c => ({
        label: c,
        value: c
    })) || [];*/}

    const locationOptions = [
        { label: "All Locations", value: ""},
        ...(filters.data?.other_sources.locations.map((l) => ({
        label: l,
        value: l
    })) || []),
    ];

    {/*const months = filters.data?.months.map(m => ({
        label: m,
        value: m
    })) || [];

    const marketOptions = filters.data?.markets.map(m => ({
        label: m,
        value: m
    })) || [];

    const form = useForm<FormData>({
        mode: "controlled",
        initialValues: {
            commodity: "",
            market1: "",
            market2: "",
            month: "",
        },
        validate: {
            commodity: ((value): string | null => value ? null : "Commodity is required"),
            market1: ((value): string | null => value ? null : "First Market is required"),
            market2: ((value): string | null => value ? null : "Second Market is required"),
            month: ((value): string | null => value ? null : "Month is required"),
        }
    });

    const {
        data: compareData,
        isLoading: comparePending,
        refetch: refetchCompare
    } = useGetComparePrices(
        compareParams as InsightParams
    );

    const handleCompareSubmit = form.onSubmit((values) => {
        setCompareParams(values);
        setTimeout(() => {
            refetchCompare();
        }, 0);
    });*/}

    const filteredList = useMemo(() => {
        if (!data) return [];

        return data?.data.filter(record =>
            !searchTerm || record.commodity.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [data, searchTerm]);

    const columns: DataTableColumn<OtherSourcesResponse>[] = [
        {
            accessor: "date",
            title: "Date",
            cellsClassName: styles.tableCells,
            titleClassName: styles.tableColumnCells,
            render: ({ date }) => formatDate(date)
        },
        {
            accessor: "commodity",
            title: "Commodity",
            cellsClassName: styles.tableCells,
            titleClassName: styles.tableColumnCells,
        },
        {
            accessor: "location",
            title: "Location",
            cellsClassName: styles.tableCells,
            titleClassName: styles.tableColumnCells,
        },
        {
            accessor: "price",
            title: "Price(₦/bag)",
            textAlign: "right",
            cellsClassName: styles.tableCells,
            titleClassName: styles.tableColumnCells,
            render: ({ price }) => `₦${price?.toLocaleString("en", { minimumFractionDigits: 2 })}`
        },
    ];

    const _renderLoader = () => {
        return (
            <Box mt="lg">
                <LoadingTable
                    records={14}
                    withFilters
                    withPagination
                    numColumns={4}
                />
            </Box>
        )
    }

    const _renderError = () => {
        const loading = status === "pending";
        return <ErrorCard error={error} name="Other sources history" loading={loading} retry={refetch} />
    }

    const _renderEmpty = () => {
        return (
            <Stack>
                <Group my="md" justify="space-between">
                    <Group gap="sm">
                        <TextInput
                            leftSection={<IoSearchOutline />}
                            disabled c="gray.8"
                            w={{ base: "100%", md: 300 }}
                            placeholder="Search by commodity"
                            size="md"
                        />
                        <FormSelect
                            withAsterisk
                            data={commodityOptions}
                            placeholder="Select a commodity"
                            size="md"
                            searchable
                            value={commodity}
                            onChange={(value) => setCommodity(value || "")}
                        />
                    </Group>
                    <Group>
                        <FormSelect
                            withAsterisk
                            data={locationOptions}
                            placeholder="Select a location"
                            size="md"
                            searchable
                            value={location}
                            onChange={(value) => setLocation(value || "")}
                        />
                        <Button leftSection={<IoDownloadOutline />} disabled fz={11} tt="uppercase" fw={400} color="gray.5" c="dark" variant="light" size="md">Export</Button>
                    </Group>
                </Group>

                <Paper className={styles.empty}>
                    <Stack className={styles.empty__stack} align="center" gap="xs">
                        <Image className={styles.empty__img} src={emptyImg} alt="empty" />
                        <Title fz={19} fw={500}>
                            No Records found.
                        </Title>
                        <Text ta="center" size="xs" w="80%" fw={300}>
                            You'll start seeing your activity represented in
                            chart once updates are made . Kindly check back later.
                        </Text>
                    </Stack>
                </Paper>
            </Stack>
        )
    }

    const _renderData = () => {
        if (status === "pending")
            return _renderLoader()
        else if (!data && error)
            return _renderError();
        else if (!data?.data.length)
            return _renderEmpty();
        else return (
            <Box my={50}>
                {/*<Grid align="stretch">
                    <Grid.Col span={{ base: 12, xl: 12 }}>
                        <Card h="100%" p={0}>
                            <Grid align="stretch">
                                <Grid.Col span={{ base: 12, md: 12, xl: 3 }}>
                                    <Card className={`${styles.metrics} ${styles.metrics1}`} h="100%" withBorder>
                                        <Stack className={`${styles.metrics__content1} ${styles.metrics__content}`} justify="center">
                                            {
                                                compareData?.success == true ?
                                                    <Stack justify="space-between" className={`${styles.metrics__content}`}>
                                                        <Text size="md" fw={400} tt="uppercase">Cheapest Market</Text>
                                                        <Title fw={600} tt="uppercase" order={2} >{compareData.comparison.buy_from.market}</Title>
                                                        <Text size="md" fw={400} tt="uppercase">Market Price</Text>
                                                        <Text size="md" fw={400} tt="uppercase">&#x20A6; {compareData.comparison.buy_from.avg_price_per_kg.toLocaleString("en", { minimumFractionDigits: 2 })} (Avg/kg)</Text>
                                                        <Text size="md" fw={400} tt="uppercase">&#x20A6; {compareData.comparison.buy_from.avg_price_per_bag.toLocaleString("en", { minimumFractionDigits: 2 })} (Avg/bag)</Text>
                                                    </Stack>
                                                    :
                                                    <Stack>
                                                        <Text size="md" fw={400} tt="uppercase">Data unavailable.</Text>
                                                        <Text size="md" fw={400}>Select filters to compare market prices.</Text>
                                                    </Stack>
                                            }
                                        </Stack>
                                    </Card>
                                </Grid.Col>
                                <Grid.Col span={{ base: 12, md: 12, xl: 3 }}>
                                    <Card className={`${styles.metrics} ${styles.metrics2}`} h="100%" withBorder>
                                        <Stack className={`${styles.metrics__content2} ${styles.metrics__content}`} justify="center">
                                            {
                                                compareData?.success == true ?
                                                    <Stack justify="space-between" className={`${styles.metrics__content}`}>
                                                        <Text size="md" fw={400} tt="uppercase">Expensive Market</Text>
                                                        <Title fw={600} tt="uppercase" order={2} >{compareData.comparison.avoid.market}</Title>
                                                        <Text size="md" fw={400} tt="uppercase">Market Price</Text>
                                                        <Text size="md" fw={400} tt="uppercase">&#x20A6; {compareData.comparison.avoid.avg_price_per_kg.toLocaleString("en", { minimumFractionDigits: 2 })} (Avg/kg)</Text>
                                                        <Text size="md" fw={400} tt="uppercase">&#x20A6; {compareData.comparison.avoid.avg_price_per_bag.toLocaleString("en", { minimumFractionDigits: 2 })} (Avg/bag)</Text>
                                                    </Stack>
                                                    : 
                                                    <Stack>
                                                        <Text size="md" fw={400} tt="uppercase">Data unavailable.</Text>
                                                        <Text size="md" fw={400}>Select filters to compare market prices.</Text>
                                                    </Stack>
                                            }
                                        </Stack>
                                    </Card>
                                </Grid.Col>
                                <Grid.Col span={{ base: 12, md: 12, xl: 6 }}>
                                    <Paper className={`${styles.metrics} ${styles.metrics3}`}>
                                        <form onSubmit={handleCompareSubmit}>
                                            <Stack className={`${styles.metrics__content4} ${styles.metrics__content}`} justify="space-between">
                                                <Grid>
                                                    <Grid.Col span={{ base: 12, md: 6 }}>
                                                        <FormSelect
                                                            width="100%"
                                                            searchable
                                                            size="md"
                                                            label="Select Commodity"
                                                            {...form.getInputProps('commodity')}
                                                            data={commodities}
                                                            error={form.errors.commodity && <Text size="xs" c="red">{form.errors.commodity}</Text>}
                                                        />
                                                    </Grid.Col>

                                                    <Grid.Col span={{ base: 12, md: 6 }}>
                                                        <FormSelect
                                                            width="100%"
                                                            searchable
                                                            size="md"
                                                            label="Select a Month"
                                                            {...form.getInputProps('month')}
                                                            data={months}
                                                            error={form.errors.month && <Text size="xs" c="red">{form.errors.month}</Text>}
                                                        />
                                                    </Grid.Col>
                                                </Grid>

                                                <Grid>
                                                    <Grid.Col span={{ base: 12, md: 6 }}>
                                                        <FormSelect
                                                            width="100%"
                                                            searchable
                                                            label="Select First Market"
                                                            {...form.getInputProps('market1')}
                                                            data={marketOptions}
                                                            size="md"
                                                            error={form.errors.market1 && <Text size="xs" c="red">{form.errors.market1}</Text>}
                                                        />
                                                    </Grid.Col>
                                                    <Grid.Col span={{ base: 12, md: 6 }} >
                                                        <FormSelect
                                                            size="md"
                                                            width="100%"
                                                            searchable
                                                            label="Select Second Market"
                                                            {...form.getInputProps('market2')}
                                                            data={marketOptions}
                                                            error={form.errors.market2 && <Text size="xs" c="red">{form.errors.market2}</Text>}
                                                        />
                                                    </Grid.Col>
                                                </Grid>
                                                <Group align="right">
                                                    <FormButton type="submit" w="100%" loading={comparePending == true}>
                                                        Compare Prices
                                                    </FormButton>
                                                </Group>
                                            </Stack>
                                        </form>
                                    </Paper>
                                </Grid.Col>
                            </Grid>
                        </Card>
                    </Grid.Col >
                </Grid >
                {compareData?.success == false && <Text c="red" mt={20} ta="right" fw={500}>Error: {compareData?.market1_status?.error}</Text>}*/}
                <Paper my={50}>
                    <Text size="lg" tt="uppercase" fw={400}>
                        Open Market Prices
                    </Text>
                    <Group my="md" justify="space-between" wrap="wrap">
                        <Group gap="sm">
                            <TextInput
                                leftSection={<IoSearchOutline />}
                                c="gray.8"
                                w={{ base: "100%", md: 300 }}
                                placeholder="Search by commodity"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.currentTarget.value)}
                                size="md"
                            />
                            <FormSelect
                                withAsterisk
                                data={commodityOptions}
                                placeholder="Select a commodity"
                                size="md"
                                searchable
                                value={commodity}
                                onChange={(value) => setCommodity(value || "")}
                            />
                        </Group>
                        <Group>
                            <FormSelect
                                withAsterisk
                                data={locationOptions}
                                placeholder="Select a location"
                                size="md"
                                value={location}
                                searchable
                                onChange={(value) => setLocation(value || "")}
                            />
                            <Button leftSection={<IoDownloadOutline />} fz={11} tt="uppercase" fw={400} color="gray.5" c="dark" variant="light" onClick={handleExport} size="md">Export</Button>
                        </Group>
                    </Group>

                    <DataTable
                        minHeight={300}
                        striped={true}
                        columns={columns}
                        withRowBorders={true}
                        withColumnBorders={true}
                        records={filteredList ?? []}
                        stripedColor="#fffdfb"
                        borderColor="#f1902512"
                        pinFirstColumn
                        //pinLastColumn
                        highlightOnHover
                        highlightOnHoverColor="#fef9f3"
                        totalRecords={data?.pagination?.total_records}
                        recordsPerPage={page_size}
                        page={page}
                        onPageChange={(p) => setPage(p)}
                        recordsPerPageOptions={PAGE_SIZES}
                        onRecordsPerPageChange={setPage_size}
                    />
                </Paper>
            </Box >

        )
    };

    const handleExport = () => {
        const csvHeaders = [
            "Date",
            "Commodity",
            "Location",
            "Price(₦/bag)"
        ];

        const csvRows = filteredList?.map((record) => [
            record.date,
            record.commodity,
            record.location,
            `"₦${record.price.toLocaleString("en", { minimumFractionDigits: 2 })}"`,
        ]) ?? [];

        const csvContent = [
            csvHeaders.join(","),
            ...csvRows.map(row => row.map(field => `${field}`).join(","))
        ].join("\n");

        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");

        link.href = url;
        link.setAttribute("download", `Other Sources - ${new Date().toISOString().slice(0, 10)}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <Box style={{ overflowX: "auto" }}>
            {_renderData()}
        </Box>
    )
}
