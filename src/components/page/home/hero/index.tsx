import { Group, Box, Stack, Text, Title, Image, Button, SimpleGrid } from "@mantine/core";
// @ts-ignore: no declaration file for module '@/utils/mixpanel.js'
import mixpanel from "@/utils/mixpanel.js";
import styles from "./hero.module.scss";

import heroImg from "@/assets/hero.webp";
import loginBgLeft from "@/assets/login-bg-l.svg";
import loginBgRight from "@/assets/login-bg-r.svg";

export default function Hero() {
    function getStarted() {
        window.open(`https://app.kasuwa.com/login`, "_blank");
        mixpanel?.track('Get Started Button Clicked');
    }

    function getOnGoogle() {
        window.open(`https://play.google.com/store/apps/details?id=com.kasuwa_v2`, "blank");
    }

    return (
        <section className={styles.hero}>
            <Box className={styles.hero__box}>
                <Stack gap={45}>
                    <Stack className={styles.hero__box__stack} gap="md">
                        <Title size={45} fw={600} c="#364330">
                            The Future of Agriculture is Here.
                        </Title>
                        <Text size="sm" fw={300} c="gray.7" component="p" lh={1.7}>
                            Streamlining production by ensuring access to inputs,
                            consolidating outputs for better market reach, and providing
                            financial tools to empower producers.
                        </Text>
                        <Group gap="sm" className={styles.hero__box__stack__dowloadLinks}>
                            <SimpleGrid cols={2}>
                                <Button
                                    size="md"
                                    fz={11}
                                    fw={500}
                                    color="orange.5"
                                    tt="uppercase"
                                    onClick={getStarted}
                                >
                                    Get Started
                                </Button>
                                <Button
                                    size="md"
                                    fz={11}
                                    fw={500}
                                    color="orange.5"
                                    tt="uppercase"
                                    onClick={getOnGoogle}
                                    variant="outline"
                                >
                                    Download on Play Store
                                </Button>
                            </SimpleGrid>
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
