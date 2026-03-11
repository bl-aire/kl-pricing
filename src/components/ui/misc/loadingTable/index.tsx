import { Stack, Group } from '@mantine/core';
import { DataTable } from 'mantine-datatable';
import styles from "./loadingTable.module.scss";

interface LoadingTableProps {
    withPagination?: boolean;
    withFilters?: boolean;
    numColumns: number;
    records?: number;
}

export default function LoadingTable({numColumns, withPagination=false, withFilters=false, records = numColumns}:LoadingTableProps) {
    const columns = Array.from({ length: numColumns }, (_, index) => ({
        width: 125,
        accessor: `column-${index}`,
        title: <div className={styles.cellTitle} />,
        cellsClassName: styles.tableCells,
        titleClassName: styles.tableColumnCells,
        render: () => (
          <div 
            key={index}
            style={{width:`${index % 2 === 0 ? "3" : "4"}rem`}} 
            className={`${styles.cellLoader} ${index % 2 === 0 && styles.animate}`} 
        />
        ),
    }));

    return (
        <Stack gap="md">
            {withFilters && (
                <Group justify="space-between">
                    <div className={styles.input} />
                    <Group>
                        <div className={styles.btn} />
                        <div className={styles.btn} />
                    </Group>
                </Group>
            )}

            <DataTable
                idAccessor={(el) => `${el}`}
                striped={true}
                columns={columns}
                borderColor="#f1f1f1"
                withRowBorders={true}
                withColumnBorders={false}
                records={[...Array(records).keys()]}
                stripedColor="#fafafa"
                pinLastColumn
                pinFirstColumn
                minHeight={280}
            />

            {withPagination && (
                <Group justify="flex-end">
                    {[...Array(3).keys()].map((_, idx) => (
                        <div key={idx} className={styles.pagination} />
                    ))}
                </Group>
            )}
        </Stack>
    )
}
