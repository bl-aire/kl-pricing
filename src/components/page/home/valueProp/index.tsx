import { Grid, Stack, Title, Text, Box, Paper } from "@mantine/core";
import { PiFarmDuotone, PiBuildingOfficeDuotone, PiBuildingsDuotone, PiUsersDuotone, PiPiggyBankDuotone } from "react-icons/pi";

import styles from "./valueProp.module.scss";

export default function ValueProp() {
    return (
        <section className={styles.vp}>
            <Stack mx="auto" align="center">
                {/* <Title order={5} c="orange.6">
                    Unique Selling Points
                </Title> */}
                <Title fw={600} c="#364330" ta="center">
                    How Can <span className={styles.vp__span}>Kasuwa</span> Help
                </Title>
                <Text size="sm" fw={300} w="50%" ta="center" c="gray.7">
                    Whatever area your interest in Agriculture lies, there is something
                    for you to better enchance your productivity.
                </Text>
            </Stack>

            <Grid gutter="lg">
                <Grid.Col span={{base: 12, md: 6, lg: 4}}>
                    <Paper className={`${styles.vp__paper} ${styles.bordered}`}>
                        <Stack gap="xl">
                            <Stack gap="sm">
                                <Box mb="md" className={styles.vp__paper__icon}>
                                    <PiFarmDuotone size={28} color="#364330"/>
                                </Box>
                                <Title order={4} fw={600}>
                                    Farmers & Aggregators
                                </Title>
                                <Text fw={300} size="sm">
                                    Sell commodities, access input credits climate
                                    solutions, and other financial services, tailored 
                                    to improve productivity, sustainability, and profitability.
                                </Text>
                            </Stack>
                            
                            <Text size="xs" tt="uppercase" fw={300} td="underline">
                                Get Started
                            </Text>
                        </Stack>
                    </Paper>
                </Grid.Col>
                <Grid.Col span={{base: 12, md: 6, lg: 4}}>
                    <Paper className={styles.vp__paper}>
                        <Stack gap="xl">
                            <Stack gap="sm">
                                <Box mb="md" className={styles.vp__paper__icon}>
                                    <PiBuildingOfficeDuotone size={28} color="#364330"/>
                                </Box>
                                <Title order={4} fw={600}>
                                    Buyers & Processors
                                </Title>
                                <Text fw={300} size="sm">
                                    Source commodities effortlessly, request climate-smart 
                                    logistics, and financial services that streamline procurement 
                                    and supply chain management
                                </Text>
                            </Stack>
                            
                            <Text size="sm" tt="capitalize" fw={300} td="underline">
                                Get Started
                            </Text>
                        </Stack>
                    </Paper>
                </Grid.Col>
                <Grid.Col span={{base: 12, md: 6, lg: 4}}>
                    <Paper className={`${styles.vp__paper} ${styles.bordered}`}>
                        <Stack gap="xl">
                            <Stack gap="sm">
                                <Box mb="md" className={styles.vp__paper__icon}>
                                    <PiPiggyBankDuotone size={28} color="#364330" />
                                </Box>
                                <Title order={4} fw={600}>
                                    Retailers
                                </Title>
                                <Text fw={300} size="sm">
                                    Get goods on time with our network of FMCGs and processors. 
                                    Access financial services and and reliable logistics solutions 
                                    to ensure smooth operations
                                </Text>
                            </Stack>
                            
                            <Text size="sm" tt="capitalize" fw={300} td="underline">
                                Get Started
                            </Text>
                        </Stack>
                    </Paper>
                </Grid.Col>
                <Grid.Col span={{base: 12, md: 6, lg: 4}}>
                    <Paper className={styles.vp__paper}>
                        <Stack gap="xl">
                            <Stack gap="sm">
                                <Box mb="md" className={styles.vp__paper__icon}>
                                    <PiPiggyBankDuotone size={28} color="#364330" />
                                </Box>
                                <Title order={4} fw={600}>
                                    Financial Institutions
                                </Title>
                                <Text fw={300} size="sm">
                                    Access a pool of verified opportunities with 
                                    end-to-end security and visibility.
                                    Leverage data-driven insights to make informed 
                                    decisions with confidence.
                                </Text>
                            </Stack>
                            
                            <Text size="sm" tt="capitalize" fw={300} td="underline">
                                Get Started
                            </Text>
                        </Stack>
                    </Paper>
                </Grid.Col>
                <Grid.Col span={{base: 12, md: 6, lg: 4}}>
                    <Paper className={`${styles.vp__paper} ${styles.bordered}`}>
                        <Stack gap="xl">
                            <Stack gap="sm">
                                <Box mb="md" className={styles.vp__paper__icon}>
                                    <PiUsersDuotone size={28} color="#364330" />
                                </Box>
                                <Title order={4} fw={600}>
                                    Investors & Individuals
                                </Title>
                                <Text fw={300} size="sm">
                                    We all know "numbers don't lie", access real-time market trends and invest in a 
                                    transparent ecosystem. Make informed decisions and grow your portfolio
                                </Text>
                            </Stack>
                            
                            <Text size="sm" tt="capitalize" fw={300} td="underline">
                                Get Started
                            </Text>
                        </Stack>
                    </Paper>
                </Grid.Col>
                <Grid.Col span={{base: 12, md: 6, lg: 4}}>
                    <Paper className={styles.vp__paper}>
                        <Stack gap="xl">
                            <Stack gap="sm">
                                <Box mb="md" className={styles.vp__paper__icon}>
                                    <PiBuildingsDuotone size={28} color="#364330" />
                                </Box>
                                <Title order={4} fw={600}>
                                    NGOs & Institutions
                                </Title>
                                <Text fw={300} size="sm">
                                    Partner with us to combat food insecurity and achieve 
                                    ESG, SDG, and sustainability goals. Leverage our innovative solutions and on-the-ground expertise
                                </Text>
                            </Stack>
                            
                            <Text size="sm" tt="capitalize" fw={300} td="underline">
                                Get Started
                            </Text>
                        </Stack>
                    </Paper>
                </Grid.Col>
            </Grid>
        </section>
    )
}
