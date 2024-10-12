import { Box, Title, Text, Paper, Image } from "@mantine/core";

import styles from "./review.module.scss";

import reviewLogo from "@/assets/reviews/kiarra.png";

export default function Review() {
    return (
        <section className={styles.review}>
            <Paper className={styles.review__paper}>
                <Image src={reviewLogo} w={85} h={85} alt="kiarra" className={styles.review__paper__img} />

                <Box className={styles.review__paper__box}>
                    <Text lh={1.7}>
                        Kasuwa is the ideal supply management tool, helping to fill a 
                        large quota of our raw material needs as it enables suppliers 
                        to see all the required information to supply at a glance, 
                        information such as volume, price, delivery location and payment.
                    </Text>

                    <Title order={5} fw={600}>
                        Jawed Akthar, General Manager
                    </Title>
                </Box>
            </Paper>
        </section>
    )
}
