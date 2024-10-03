import { BsShieldLock } from "react-icons/bs";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { Grid, Stack, Title, Text, Box, Paper } from "@mantine/core";
import { PiGooglePlayLogoDuotone, PiGlobeHemisphereEastDuotone, PiShieldCheckeredDuotone } from "react-icons/pi";

import styles from "./onboarding.module.scss";

export default function Onboarding() {
    return (
        <section className={styles.gs}>
            <article className={styles.gs__banner}>
                <Text fw={500} component="p" tt="uppercase" size="md" c="#364330">
                    Over 2k users with $10M+ value of 
                    commodity traded
                </Text>
            </article>

            <Box className={styles.gs__box}>
                <Stack align="center">
                    <Title order={1} fw={600} c="#364330">
                        Super Simple to Get Started.
                    </Title>
                    <Text fw={300} size="sm" w="50%" ta="center" c="gray.7">
                        Experiencing the blend of Agriculture, Technology, and 
                        Finance is as simple as following the steps below 
                    </Text>
                </Stack>

                <Grid>
                    <Grid.Col span={{base: 12, md: 6, lg: 4}}>
                        <Paper bg="#fffdfb" className={styles.gs__box__item}  p="xl">
                            <Stack>
                                <div className={styles.gs__icon}>
                                    <PiGooglePlayLogoDuotone size={28} color="#364330" />
                                </div>
                                <Title order={3} fw={600} c="#364330">
                                    Download & Register
                                </Title>
                                <Text fw={300} size="sm" c="gray.8">
                                    Download the app from the Google Play store and 
                                    complete your registration in minutes. Get started today 
                                    to experience Kasuwa for yourself.
                                </Text>
                            </Stack>
                        </Paper>
                    </Grid.Col>
                    <Grid.Col span={{base: 12, md: 6, lg: 4}}>
                        <Paper bg="#fffdfb" className={styles.gs__box__item} p="xl">
                            <Stack>
                                <div className={styles.gs__icon}>
                                    <PiShieldCheckeredDuotone size={28} color="#364330" />
                                </div>
                                <Title order={3} fw={600} c="#364330">
                                    Customer Due Diligence
                                </Title>
                                <Text fw={300} size="sm" c="gray.8">
                                    Complete the KYC process to allow us verify and
                                    know you better. You will be notified as soon as our compliance
                                    team is finished reviewing.
                                </Text>
                            </Stack>
                        </Paper>
                    </Grid.Col>
                    <Grid.Col span={{base: 12, md: 6, lg: 4}}>
                        <Paper bg="#fffdfb" className={styles.gs__box__item} p="xl">
                            <Stack>
                                <div className={styles.gs__icon}>
                                    <PiGlobeHemisphereEastDuotone size={28} color="#364330" />
                                </div>
                                <Title order={3} fw={600} c="#364330">
                                    Explore the Blend
                                </Title>
                                <Text fw={300} size="sm" c="gray.8">
                                    Discover integrated tools that enhance your trading experience 
                                    and streamline operations. From virtual wallets to commodity fulfillment.
                                </Text>
                            </Stack>
                        </Paper>
                    </Grid.Col>
                </Grid>
            </Box>

            <article className={styles.gs__security}>
                <Stack align="center">
                    <Title order={1} fw={600} c="#364330" ta="center">
                        Safety + Compliance = <span>Kasuwa</span>
                    </Title>
                    <Text fw={300} size="sm" w="50%" ta="center" c="gray.7">
                        Ensure a safe and compliant work environment with our 
                        comprehensive solution, designed to meet regulatory standards 
                        and protect your transactions and data. 
                    </Text>
                </Stack>

                <Grid justify="center">
                    <Grid.Col span={{base: 12, md: 6, lg: 5}}>
                        <Paper className={styles.gs__security__card}>
                            <div className={styles.gs__security__card__icon}>
                                <BsShieldLock color="#364330" size={24} />
                            </div>
                            <Stack>
                                <Title order={3} fw={600} c="#364330">
                                    Data & Privacy Protection
                                </Title>
                                <Text fw={300} size="sm">
                                    At Kasuwa, your data protection is our top priority. As a 
                                    registered Data Controller/Processor with the Nigeria Data 
                                    Protection Commission (NDPC), we ensure full compliance with 
                                    data protection regulations.
                                </Text>
                            </Stack>
                        </Paper>
                    </Grid.Col>
                    <Grid.Col span={{base: 12, md: 6, lg: 5}}>
                        <Paper className={styles.gs__security__card}>
                            <div className={styles.gs__security__card__icon}>
                                <IoDocumentAttachOutline color="#364330" size={24} />
                            </div>
                            <Stack>
                                <Title order={3} fw={600} c="#364330">
                                    Licenses & Certifications
                                </Title>
                                <Text fw={300} size="sm">
                                    Kasuwa operates in partnership with top-tier financial institutions 
                                    regulated and authorized by the Central Bank of Nigeria (CBN). Our 
                                    adherence to industry-standard protocols ensures financial safety.
                                </Text>
                            </Stack>
                        </Paper>
                    </Grid.Col>
                </Grid>
            </article>
        </section>
    )
}
