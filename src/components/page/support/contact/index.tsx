import { Grid, Group, Stack, Title, Text, Button } from "@mantine/core";
import { PiChatsFill, PiPhoneTransferFill, PiBuildingsFill } from "react-icons/pi";

import styles from "./contact.module.scss";

export default function Contact() {
    return (
        <section className={styles.info}>
            <article className={styles.info__paper}>
                <Grid gutter="md">
                    <Grid.Col span={{base: 12, md: 6, lg: 4}}>
                        <Group wrap="nowrap">
                            <div className={styles.info__paper__icon}>
                                <PiPhoneTransferFill size={24} />
                            </div>

                            <Stack w={260}>
                                <Title order={4} fw={600}>
                                    Talk to Sales
                                </Title>

                                <Stack gap={12}>
                                    <Text size="sm" fw={300}>
                                        Interested in Kasuwa? Talk to a 
                                        member of our sales team.
                                    </Text>
                                    <Text size="sm" td="underline" c="orange.5" fw={400}>
                                        +234 806 971 5237
                                    </Text>
                                    <Text size="sm" td="underline" c="orange.5" fw={400}>
                                        +234 703 918 3358
                                    </Text>
                                </Stack>
                            </Stack>
                        </Group>
                    </Grid.Col>
                    <Grid.Col span={{base: 12, md: 6, lg: 4}}>
                        <Group wrap="nowrap">
                            <div className={styles.info__paper__icon}>
                                <PiChatsFill size={24} />
                            </div>

                            <Stack w={260}>
                                <Title order={4} fw={600}>
                                    Get in Touch
                                </Title>

                                <Stack gap={12}>
                                    <Text size="sm" fw={300}>
                                        Call, send email, or chat with support 
                                        agents anytime, anyday.
                                    </Text>
                                    <Text c="orange.5" fw={400} size="sm">
                                        Phone: <Text c="dark" span>+234 902 456 9374</Text>
                                    </Text>
                                    <Text c="orange.5" fw={400} size="sm">
                                        Email: <Text c="dark" span>info@agriarche.com</Text>
                                    </Text>
                                </Stack>
                            </Stack>
                        </Group>
                    </Grid.Col>
                    <Grid.Col span={{base: 12, md: 6, lg: 4}}>
                        <Group wrap="nowrap">
                            <div className={styles.info__paper__icon}>
                                <PiBuildingsFill size={24} />
                            </div>

                            <Stack w={260}>
                                <Title order={4} fw={600}>
                                    Global Headquarters
                                </Title>
                                <Stack align="flex-start" gap={12}>
                                    <Text size="sm" fw={300}>
                                        101D, First Floor, Novare Central Mall,
                                        Wuse, Abuja 904101, Fedreal Capital Territory,
                                        Nigeria
                                    </Text>
                                    <Button fz={11} variant="light" tt="uppercase" fw={500} color="orange.5">
                                        Chat on WhatsApp
                                    </Button>
                                </Stack>
                            </Stack>
                        </Group>
                    </Grid.Col>
                </Grid>
            </article>
        </section>
    )
}
