import { Group, Box, Stack, Text, TextInput, Title, Image, Paper, Button } from "@mantine/core";
import { PiCaretDown } from "react-icons/pi"; 

import styles from "./hero.module.scss";

import heroImg from "@/assets/hero.webp";
import flagImg from "@/assets/flag.svg";
import loginBgLeft from "@/assets/login-bg-l.svg";
import loginBgRight from "@/assets/login-bg-r.svg";

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
                    </Stack>


                    <Stack className={styles.hero__box__cta}>
                        <Text size="sm" fw={400} component="p" c="orange.7">
                            Try it out, what's your phone number?
                        </Text>
                        <Paper w="92%" p="xs" className={styles.hero__box__paper} shadow="sm">
                            <Box className={styles.hero__box__paper__prefix}>
                                <Group gap="sm">
                                    <Image w={20} h={20} src={flagImg} alt="flag" />
                                    <Text size="sm" fw={500}>+234</Text>
                                    <PiCaretDown size={12} />
                                </Group>
                            </Box>

                            <Group style={{flex: 1}}>
                                <TextInput style={{flex: 1}} variant="white" placeholder="70583654788" />
                                <Button size="md" fz={11} fw={500} tt="uppercase" color="orange.5">
                                    Send Link
                                </Button>
                            </Group>
                        </Paper>
                    </Stack>
                </Stack>
            </Box>

            <Image className={styles.hero__img} fallbackSrc="https://placehold.co/600x400?text=Placeholder" src={heroImg} alt="hero" />

            <img className={styles.hero__bg_l} src={loginBgLeft} alt="leaf"/>
            <img className={styles.hero__bg_r} src={loginBgRight} alt="leaf"/>
        </section>
    )
}
