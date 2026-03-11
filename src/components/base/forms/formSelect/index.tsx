import { Select, type SelectProps } from "@mantine/core";

import styles from "./formSelect.module.scss";

export default function FormSelect(props:SelectProps) {
    return (
        <Select 
            {...props}
            classNames={{
                label: styles.label,
                input: styles.input,
                error: styles.error,
                description: styles.description,
                option: styles.option
            }}
        />
    )
}
