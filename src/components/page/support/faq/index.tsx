import { Accordion, Paper, Title, Text } from "@mantine/core";

import styles from "./faq.module.scss";

const questions = [
    {
        id: 1,
        value: "What is Kasuwa",
        description: "Kasuwa is an Agric marketplace where Agricultural commodities are traded on a daily basis. It is a platform where supply meets demand like a typical market. On kasuwa, every day is a market day."
    },
    {
        id: 2,
        value: "How do i sign up on the app?",
        description: "Download the kasuwa app on your smartphone from Google Playstore or Apple App Store or log on to kasuwa.agriarche.com on your browser and click signup"
    },
    {
        id: 3,
        value: "Who are Commodity Buyers?",
        description: "Commodity buyers are Processors or companies that buy agricultural commodities and/or sell finished products"
    },
    {
        id: 4,
        value: "Do I need any documents to trade on Kasuwa?",
        description: "Yes! There are compliance documents you need to upload before trading on kasuwa. Click here to find out which documents are needed."
    },
    {
        id: 5,
        value: "Do I get paid instantly after delivery?",
        description: "Yes.But on special occasions like weekends, payments may delay upto 48hrs."
    },
    {
        id: 6,
        value: "How do I get access to finance?",
        description: "As a seller, you can access finance when you have fulfilled all the onboarding requirements and confirmation of the availability of grains."
    },
    {
        id: 7,
        value: "Can i get funded for two or more commodities",
        description: "Sellers can only be funded one trade at a go, but funding will be made available immediately upon the dispatch of a truck."
    },
    {
        id: 8,
        value: "Can i access real-time funded trades?",
        description: "There are no real time views for trades however If a specific need arises to recall a trade. The details of the trade can be shared upon request"
    },
]

export default function Faq() {
    const items = questions.map((item) => (
        <Accordion.Item key={item.id} value={item.value}>
            <Accordion.Control>
                <Title fz={15} fw={500}>
                    {item.value}
                </Title>
            </Accordion.Control>
            <Accordion.Panel>
                <Text size="sm" fw={300} c="gray.8" lh={1.8}>
                    {item.description}
                </Text>
            </Accordion.Panel>
        </Accordion.Item>
    ));

    return (
        <section className={styles.faqs}>
            <Title order={1} fw={600}>
                Frequently Asked Questions
            </Title>

            <Paper className={styles.faqs__paper}>
                <Accordion multiple defaultValue={questions.map(el => el.value)}>
                    {items}
                </Accordion>
            </Paper>
        </section>
    )
}
