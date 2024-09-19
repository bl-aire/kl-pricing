import { useScrollIntoView } from '@mantine/hooks';
import { Stack, Group, Box, Paper, Title, Text, List } from "@mantine/core";

import styles from "./legal.module.scss";

import Banner from '@/components/ui/banner';
import LandingLayout from "@/components/base/layout";

const title = "Legal";
const subtitle = "Last updated: April 2022";

export default function LegalPolicies() {
    const definationEl = useScrollIntoView<HTMLDivElement>({ offset: 60 });

    return (
        <LandingLayout>
            <Banner title={title} subtitle={subtitle} />

            <section className={styles.legal}>
                <Group align="flex-start" justify="space-between">
                    <Box className={styles.legal__panel}>
                        <List spacing="xs" listStyleType="none">
                            <List.Item fz={12} fw={500} tt="uppercase">On this page</List.Item>
                            <List.Item fz={14} fw={300} style={{cursor: "pointer"}} onClick={() => definationEl.scrollIntoView()}>
                                Definations
                            </List.Item>
                            <List.Item fz={14} fw={300}>Acknowledgement</List.Item>
                            <List.Item fz={14} fw={300}>Registration & Account</List.Item>
                            <List.Item fz={14} fw={300}>Privacy</List.Item>
                            <List.Item fz={14} fw={300}>Confidentiality of Account Details</List.Item>
                            <List.Item fz={14} fw={300}>Buyers</List.Item>
                            <List.Item fz={14} fw={300}>Agents</List.Item>
                            <List.Item fz={14} fw={300}>Aggregators & Farmer Influencers</List.Item>
                            <List.Item fz={14} fw={300}>Payments</List.Item>
                            <List.Item fz={14} fw={300}>Due Diligence</List.Item>
                            <List.Item fz={14} fw={300}>Copyright & Trademarks</List.Item>
                            <List.Item fz={14} fw={300}>Links to Other Websites</List.Item>
                            <List.Item fz={14} fw={300}>Termination</List.Item>
                            <List.Item fz={14} fw={300}>Limitation of Liability</List.Item>
                        </List>
                    </Box>

                    <Paper className={styles.legal__paper}>
                        <Stack gap="xl">
                            {/* Introduction */}
                            <Stack>
                                <Title order={1} fw={600}>
                                    Terms of Service
                                </Title>
                                <Text fw={300} size="sm" lh="2">
                                    We appreciate you for using our website and subscribing to our products 
                                    and services. These services and products include offerings such 
                                    payment platform, logistics platform, traceability and tracking 
                                    features, pricing models, access to finance, and trade platform 
                                    are all accessible through mobile phone devices, tablets, and computers 
                                    and are provided by Agriarche Limited (“Agriarche”), whose address is 
                                    Plot 502, Dalaba Street, First Floor, Novare Central Office, Wuse Zone 5, 
                                    Wuse, Abuja - Nigeria.
                                </Text>
                                <Text fw={300} size="sm" lh="2">
                                    By using our products and services, you are bound by the terms and 
                                    conditions hereinafter appearing. You are kindly requested to read these 
                                    Terms and Conditions carefully before using our website 
                                    - <Text td="underline" component="a">https://www.kasuwa.agriarche.com.</Text>
                                </Text>
                                <Text fw={300} size="sm" lh="2">
                                    Please note that we are at liberty to introduce additional terms or 
                                    product requirements as circumstances may demand from time to time, which 
                                    may then govern the offerings and become part of your agreement 
                                    with us if you use them.
                                </Text>
                                <Text fw={300} size="sm" lh="2">
                                    The words in which the initial letter is capitalized have meanings 
                                    defined under the following conditions. The following definitions shall 
                                    have the same meaning regardless of whether they appear in 
                                    singular or in the plural.
                                </Text>
                            </Stack>

                            {/* Definations */}
                            <Box ref={definationEl.targetRef}>
                                <Stack>
                                    <Stack gap="sm">
                                        <Title order={2} fw={600}>Definations</Title>
                                        <Text fw={300} size="sm">
                                            For the purposes of these Terms and Conditions:
                                        </Text>
                                    </Stack>
                                    <List type="ordered" spacing="md">
                                        <List.Item fz={14} fw={300} lh="2">
                                            <Text fw={500} size="sm" span>Agents</Text> means 
                                            the <Text size="sm" span td="underline" component="a">https://www.kasuwa.agriarche.com</Text> website 
                                            operated by Agriarche
                                        </List.Item>
                                        <List.Item fz={14} fw={300} lh="2">
                                            <Text fw={500} size="sm" span>Aggregator/Farmer Influencers</Text> means individuals or 
                                            companies who want to sell agricultural commodities.
                                        </List.Item>
                                        <List.Item fz={14} fw={300} lh="2">
                                            <Text fw={500} size="sm" span>Buyers/Industrial Processors/Food Processors</Text> are processors or 
                                            companies in the agriculture space that buy commodities 
                                            and/or sell finished products
                                        </List.Item>
                                        <List.Item fz={14} fw={300} lh="2">
                                            <Text fw={500} size="sm" span>Application</Text> means the software program named Kasuwa provided 
                                            by the Company and downloaded by You on any electronic device
                                        </List.Item>
                                    </List>
                                </Stack>
                            </Box>
                        </Stack>
                    </Paper>
                </Group>
            </section>
        </LandingLayout>
    )
}
