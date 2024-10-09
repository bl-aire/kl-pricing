import { Group, Box, Stack, Text, Title, Image } from "@mantine/core";

import styles from "./hero.module.scss";

import heroImg from "@/assets/hero.webp";
import loginBgLeft from "@/assets/login-bg-l.svg";
import loginBgRight from "@/assets/login-bg-r.svg";
import googlePlay from "@/assets/images/google-play.svg";
//import appleStore from "@/assets/images/apple-store.svg";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <Box className={styles.hero__box}>
                <Stack gap={45}>
                    <Stack className={styles.hero__box__stack} gap="md">
                        <Title fz={45} fw={600} c="#364330">
                            The Future of Agriculture is Here.
                        </Title>
                        <Text size="sm" fw={300} c="gray.7" component="p" lh={1.7}>
                            Streamlining production by ensuring access to inputs,
                            consolidating outputs for better market reach, and providing
                            financial tools to empower producers.
                        </Text>
                        <Group gap="sm" className={styles.hero__box__stack__dowloadLinks}>
                            <a href="https://play.google/com/store/apps/details?id=com.kasuwa_v2" target="_blank">
                                <Image w={110} h={40} src={googlePlay} alt="flag" fit="contain" />
                            </a>
                            {/* <a href="" target="_blank">
                                <Image w={100} h={40} src={appleStore} alt="flag" fit="contain" />
                            </a> */}
                        </Group>
                    </Stack>
                </Stack>
            </Box>

            <Image className={styles.hero__img} fallbackSrc="https://placehold.co/600x400?text=Placeholder" src={heroImg} alt="hero" />

            <img className={styles.hero__bg_l} src={loginBgLeft} alt="leaf" />
            <img className={styles.hero__bg_r} src={loginBgRight} alt="leaf" />
        </section>
    )
}
