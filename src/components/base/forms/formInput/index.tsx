import { TextInput, type TextInputProps } from "@mantine/core";

import styles from "./formInput.module.scss";

export default function FormInput(props:TextInputProps) {
    return (
        <TextInput 
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
