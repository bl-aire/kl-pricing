import { NumberInput, type NumberInputProps } from "@mantine/core";

import styles from "./formNumberInput.module.scss";

export default function FormNumberInput(props:NumberInputProps) {
    return (
        <NumberInput 
            allowNegative={false}
            thousandSeparator=","
            {...props}
            classNames={{
                input: styles.input,
                label: styles.label,
                error: styles.error,
                description: styles.description,
            }}
        />
    )
}
