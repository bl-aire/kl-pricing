import { useState, useMemo } from "react";

import { DataTable, type DataTableColumn } from 'mantine-datatable';
import { IoSearchOutline, IoFilterOutline, IoDownloadOutline } from "react-icons/io5";
import { Title, Text, Paper, Group, Stack, Box, TextInput, Button, Image, Grid } from "@mantine/core";

import { useGetGapAnalysis } from "@/services/market-pricing/pricing";
import type { GapAnalysisResponse } from "@/services/market-pricing/pricing.types";

import emptyImg from "@/assets/empty.svg";
import styles from "./gap.module.scss";

import LoadingTable from "@/components/ui/misc/loadingTable";
import ErrorCard from "@/components/ui/misc/errorCard";


const PAGE_SIZES = [10, 15, 20, 50, 100, 500];

export default function GapHistory() {
    const [page, setPage] = useState(1);
    const [page_size, setPage_size] = useState(PAGE_SIZES[0]);
    const [searchTerm, setSearchTerm] = useState<string>("");

    const { data, error, status, refetch } = useGetGapAnalysis({
        page,
        page_size,
        month: "January",
        market: "All Markets"
    });


    const filteredList = useMemo(() => {
        if (!data) return [];

        return data?.data.filter(record =>
            !searchTerm || record.commodity.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [data, searchTerm]);

    const columns: DataTableColumn<GapAnalysisResponse>[] = [
        {
            accessor: "commodity",
            title: "Commodity",
            cellsClassName: styles.tableCells,
            titleClassName: styles.tableColumnCells,
        },
        {
            accessor: "cheapest_source",
            title: "Cheapest Source",
            cellsClassName: styles.tableCells,
            titleClassName: styles.tableColumnCells,
        },
        {
            accessor: "top_selling_market",
            title: "Top Selling Market",
            cellsClassName: styles.tableCells,
            titleClassName: styles.tableColumnCells,
        },
        {
            accessor: "min_price",
            title: "Min Price(₦)",
            textAlign: "right",
            cellsClassName: styles.tableCells,
            titleClassName: styles.tableColumnCells,
            render: ({ min_price }) => `₦${min_price?.toLocaleString("en", { minimumFractionDigits: 2 })}`
        },
        {
            accessor: "max_price",
            title: "Max Price(₦)",
            textAlign: "right",
            cellsClassName: styles.tableCells,
            titleClassName: styles.tableColumnCells,
            render: ({ max_price }) => `₦${max_price?.toLocaleString("en", { minimumFractionDigits: 2 })}`
        },
        {
            accessor: "avg_price",
            title: "Avg Price(₦)",
            textAlign: "right",
            cellsClassName: styles.tableCells,
            titleClassName: styles.tableColumnCells,
            render: ({ avg_price }) => `₦${avg_price?.toLocaleString("en", { minimumFractionDigits: 2 })}`
        }
    ];

    const _renderLoader = () => {
        return (
            <Box mt="lg">
                <LoadingTable
                    records={14}
                    withFilters
                    withPagination
                    numColumns={6}
                />
            </Box>
        )
    }

    const _renderError = () => {
        const loading = status === "pending";
        return <ErrorCard error={error} name="Gap history" loading={loading} retry={refetch} />
    }

    const _renderEmpty = () => {
        return (
            <Stack>
                <Group my="md" justify="space-between">
                    <Group gap="sm">

                    </Group>
                    <Group>

                    </Group>
                </Group>

                <Grid my="md">
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Group gap="sm" align="center">
                            <TextInput
                                leftSection={<IoSearchOutline />}
                                disabled
                                c="gray.8"
                                w={{ base: "50%", sm: 300 }}
                                placeholder="Search by commodity"
                                size="md"
                            />
                        </Group>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Group align="center" justify="flex-end">
                            <Button leftSection={<IoFilterOutline />} disabled fz={11} tt="uppercase" fw={400} color="gray.5" c="dark" variant="light">Filters</Button>
                            <Button leftSection={<IoDownloadOutline />} disabled fz={11} tt="uppercase" fw={400} color="gray.5" c="dark" variant="light" size="md">Export</Button>
                        </Group>
                    </Grid.Col>
                </Grid>

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
            <Paper my={50}>
                <Text size="lg" tt="uppercase" fw={400}>
                    Best Buy & Sell Markets: January 2026
                </Text>

                <Grid my="md">
                    <Grid.Col span={{ base: 6, md: 6 }}>
                        <Group gap="sm">
                            <TextInput
                                leftSection={<IoSearchOutline />}
                                c="gray.8"
                                w={{ base: "100%", sm: 300 }}
                                placeholder="Search by commodity"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.currentTarget.value)}
                                size="md"
                            />
                        </Group>
                    </Grid.Col>
                    <Grid.Col span={{ base: 6, md: 6 }}>
                        <Group align="center" justify="flex-end">
                            <Button w={{base: "100%", sm: 300}} leftSection={<IoDownloadOutline />} fz={11} tt="uppercase" fw={400} color="gray.5" c="dark" variant="light" onClick={handleExport} size="md">Export</Button>
                        </Group>

                    </Grid.Col>
                </Grid>

                <DataTable
                    striped={true}
                    minHeight={300}
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
                    totalRecords={data.pagination?.total_records}
                    recordsPerPage={page_size}
                    page={page}
                    onPageChange={(p) => setPage(p)}
                    recordsPerPageOptions={PAGE_SIZES}
                    onRecordsPerPageChange={setPage_size}
                />
            </Paper>
        )
    };

    const handleExport = () => {
        const csvHeaders = [
            "Commodity",
            "Min Price(₦)",
            "Max Price(₦)",
            "Avg Price(₦)",
            "Cheapest Source",
            "Top Selling Market"
        ];

        const csvRows = filteredList?.map((record) => [
            record.commodity,
            `"₦${record.min_price.toLocaleString("en", { minimumFractionDigits: 2 })}"`,
            `"₦${record.max_price.toLocaleString("en", { minimumFractionDigits: 2 })}"`,
            `"₦${record.avg_price.toLocaleString("en", { minimumFractionDigits: 2 })}"`,
            record.cheapest_source,
            record.top_selling_market
        ]) ?? [];

        const csvContent = [
            csvHeaders.join(","),
            ...csvRows.map(row => row.map(field => `${field}`).join(","))
        ].join("\n");

        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");

        link.href = url;
        link.setAttribute("download", `Detailed Gap Analysis - ${new Date().toISOString().slice(0, 10)}.csv`);
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
