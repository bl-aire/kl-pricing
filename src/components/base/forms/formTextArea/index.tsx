import { Textarea, type TextareaProps } from "@mantine/core";

import styles from "./formTextArea.module.scss";

export default function FormTextArea(props:TextareaProps) {
    return (
        <Textarea 
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
