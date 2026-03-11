import { useState, useMemo } from "react";

import { DataTable, type DataTableColumn } from 'mantine-datatable';
import { IoSearchOutline, IoDownloadOutline } from "react-icons/io5";
import { Title, Text, Paper, Group, Stack, Box, TextInput, Button, Image } from "@mantine/core";

import { useGetPrices } from "@/services/market-pricing/pricing";
import { useGetFilters } from "@/services/market-pricing/pricing";
import type { PriceResponse } from "@/services/market-pricing/pricing.types";

import emptyImg from "@/assets/empty.svg";
import styles from "./price.module.scss";

import { formatDate } from "@/utils/default";
import LoadingTable from "@/components/ui/misc/loadingTable";
import ErrorCard from "@/components/ui/misc/errorCard";
import FormSelect from "@/components/base/forms/formSelect";


const PAGE_SIZES = [10, 15, 20, 50, 100, 500];

export default function PriceHistory() {
    const [page, setPage] = useState(1);
    const [page_size, setPage_size] = useState(PAGE_SIZES[0]);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [commodity, setCommodity] = useState<string>(""); //Maize
    const [market, setMarket] = useState<string>("");

    const { data, error, status, refetch } = useGetPrices({
        page,
        page_size,
        commodity,
        market,
        //search: searchTerm
    });

    const filters = useGetFilters();

    const commodityOptions = [
        { label: "All Commodities", value: ""},
        ...(filters.data?.commodities.map((c) => ({
        label: c,
        value: c
    })) || []),
    ];

    const marketOptions = [
        { label: "All Markets", value: ""},
        ...(filters.data?.markets.map((m) => ({
        label: m,
        value: m
    })) || []),
    ];

    const filteredList = useMemo(() => {
        if (!data) return [];

        return data?.data.filter(record =>
            !searchTerm || record.state.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [data, searchTerm]);

    const columns: DataTableColumn<PriceResponse>[] = [
        {
            accessor: "start_time",
            title: "Date Created",
            cellsClassName: styles.tableCells,
            titleClassName: styles.tableColumnCells,
            render: ({ start_time }) => formatDate(start_time)
        },
        {
            accessor: "commodity",
            title: "Commodity",
            cellsClassName: styles.tableCells,
            titleClassName: styles.tableColumnCells,
        },
        {
            accessor: "market",
            title: "Market",
            cellsClassName: styles.tableCells,
            titleClassName: styles.tableColumnCells,
        },

        {
            accessor: "state",
            title: "State",
            cellsClassName: styles.tableCells,
            titleClassName: styles.tableColumnCells,
        },

        {
            accessor: "price_per_kg",
            title: "Price/kg(₦)",
            textAlign: "right",
            cellsClassName: styles.tableCells,
            titleClassName: styles.tableColumnCells,
            render: ({ price_per_kg }) => `₦${price_per_kg.toLocaleString("en", { minimumFractionDigits: 2 })}`
        },
        {
            accessor: "price_per_bag",
            title: "Price/bag(₦)",
            textAlign: "right",
            cellsClassName: styles.tableCells,
            titleClassName: styles.tableColumnCells,
            render: ({ price_per_bag }) => `₦${price_per_bag.toLocaleString("en", { minimumFractionDigits: 2 })}`
        },
        {
            accessor: "weight_of_bag_kg",
            title: "Weight of Bag (kg)",
            textAlign: "right",
            cellsClassName: styles.tableCells,
            titleClassName: styles.tableColumnCells,
        },

    ];

    const _renderLoader = () => {
        return (
            <Box mt="lg">
                <LoadingTable
                    records={14}
                    withFilters
                    withPagination
                    numColumns={7}
                />
            </Box>
        )
    }

    const _renderError = () => {
        const loading = status === "pending";
        return <ErrorCard error={error} name="price history" loading={loading} retry={refetch} />
    }

    const _renderEmpty = () => {
        return (
            <Stack>
                <Group my="md" justify="space-between" wrap="wrap">
                    <Group gap="sm">
                        <TextInput
                            leftSection={<IoSearchOutline />}
                            //disabled c="gray.8"
                            w={{ base: "100%", sm: 300 }}
                            placeholder="Search by state"
                            size="md" />
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
                    <Group align="center">
                        <FormSelect
                            withAsterisk
                            data={marketOptions}
                            placeholder="Select a market"
                            size="md"
                            searchable
                            value={market}
                            onChange={(value) => setMarket(value || "")}
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
                            You'll start seeing your trading activity represented in
                            chart once you start trading on Kasuwa. Kindly check back later.
                        </Text>
                    </Stack>
                </Paper>
            </Stack>
        )
    }


    const _renderData = () => {
        if (status === "pending")
            return _renderLoader()
        else if (status === "error")
            return _renderError();
        else if (status === "success" && !data?.data?.length)
            return _renderEmpty();
        else return (
            <Paper my={50} >
                <Text size="lg" tt="uppercase" fw={400}>
                    Market Price Records
                </Text>
                <Group my="md" justify="space-between">
                    <Group gap="sm" align="center">
                        <TextInput
                            leftSection={<IoSearchOutline />}
                            c="gray.8"
                            w={{ base: "100%", sm: 300 }}
                            size="md"
                            placeholder="Search by state"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.currentTarget.value)}
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
                    <Group align="center">
                        <FormSelect
                            withAsterisk
                            searchable
                            data={marketOptions}
                            placeholder="Select a market"
                            size="md"
                            value={market}
                            onChange={(value) => setMarket(value || "")}
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
        )
    };

    const handleExport = () => {
        const csvHeaders = [
            "Date Created",
            "Commodity",
            "Market",
            "State",
            "Price/kg(₦)",
            "Price/bag(₦)",
            "Weight of Bag (kg)"
        ];

        const csvRows = filteredList?.map((record) => [
            `"${formatDate(record.start_time)}"`,
            record.commodity,
            record.market,
            record.state,
            `"₦${record.price_per_kg.toLocaleString("en", { minimumFractionDigits: 2 })}"`,
            `"₦${record.price_per_bag.toLocaleString("en", { minimumFractionDigits: 2 })}"`,
            `"${record.weight_of_bag_kg.toLocaleString("en", { minimumFractionDigits: 2 })} kg"`,
        ]) ?? [];

        const csvContent = [
            csvHeaders.join(","),
            ...csvRows.map(row => row.map(field => `${field}`).join(","))
        ].join("\n");

        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");

        link.href = url;
        link.setAttribute("download", `Market Price Records - ${new Date().toISOString().slice(0, 10)}.csv`);
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
