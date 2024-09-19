import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Group, Title, Text, Stack } from "@mantine/core";

import styles from "./banner.module.scss";

interface BannerProps {
    title: string;
    subtitle?: string;
}

export default function Banner({title, subtitle}:BannerProps) {
    const navigate = useNavigate();
    return (
        <section className={styles.banner}>
            <Stack gap="sm">
                <Group gap="xs" style={{cursor: "pointer"}} onClick={() => navigate(-1)}>
                    <BsArrowLeft size={15} />
                    <Text size="sm" fw={400}>
                        Back
                    </Text>
                </Group>
                <Title order={1} fw={600}>
                    {title}
                </Title>
                <Text size="sm" fw={300}>
                    {subtitle}
                </Text>
            </Stack>
        </section>
    )
}
