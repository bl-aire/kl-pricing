import { Paper, Title, Text, BackgroundImage, Stack } from "@mantine/core";

import styles from "./banner.module.scss";

interface BannerProps {
    imageSrc?: string | undefined;
    title?: string;
    description?: string;
}

export default function Banner({ imageSrc, title, description }: BannerProps) {
    return (
        <Paper className={styles.paper}>
            <BackgroundImage src={imageSrc ?? ''} style={{ height: 250 }} className={styles.paper__background}></BackgroundImage>
            {/*<Image src={imageSrc ?? ''} alt="Banner Image" width="100%" height={200} fit="cover" />*/}
            <Stack justify="center" className={styles.paper__stack}>
                <Title order={1} mt="md" className={styles.paper__stack__title}>{title}</Title>
                <Text className={styles.paper__stack__description}>{description}</Text> 
            </Stack>

        </Paper>
    )
}