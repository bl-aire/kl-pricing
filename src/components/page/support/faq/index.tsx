import { Accordion, Paper, Title, Text } from "@mantine/core";

import styles from "./faq.module.scss";

const questions = [
    {
        id: 1,
        value: "What is Kasuwa?",
        description: "Kasuwa is an Agricultural marketplace where Agricultural commodities are traded daily. It is a platform where supply meets demand like a typical market. On Kasuwa, every day is a market day. It blends Agriculture, Technology, and Finance to improve the experience of all agriculture players by providing more efficient ways to access information, markets, finance, and opportunities that help solve key challenges in the agriculture sector."
    },
    {
        id: 2,
        value: "Who can sign up on Kasuwa?",
        description: "Kasuwa is for everyone. farmers/aggregators, buyers/industrial processors, retailers, financial institutions, institutional & individual investors, NGOs & institutions. There is something for everyone on Kasuwa."
    },
    {
        id: 3,
        value: "Who are Commodity Buyers?",
        description: "Commodity buyers are Processors or companies that buy agricultural commodities and/or sell finished products"
    },
    {
        id: 4,
        value: "Who is a Farmer Influencer/ Aggregator?",
        description: "Farmer influencers (Aggregators) are individuals or companies who want to sell/suppliers of raw agricultural commodities / assets."
    },
    {
        id: 5,
        value: "Is Kasuwa free to use?",
        description: "Kasuwa has no sign up or subscription  fee at the moment. It is free to use. "
    },
    {
        id: 6,
        value: "How do I register on Kasuwa?",
        description: "Download the kasuwa app on your smartphone from Google Play Store or Apple App Store or log on to https://kasuwa.com/signup on your browser to begin by following the on-screen instructions"
    },
    {
        id: 7,
        value: "How can I sell my grains on Kasuwa?",
        description: "There are 2 ways for you to sell your grains on Kasuwa. You can either List what you sell or Accept Orders. The former allows you to list your commodity for sale by uploading the commodity image, price, location and quality available for buyers to show interest. While the latter allows you to accept orders placed by buyers and fulfill them with the necessary specifications from the buyer."
    },
    {
        id: 8,
        value: "What is the validity of an OTP?",
        description: "An OTP is valid for 10 minutes, after which you have to resend it."
    },
    {
        id: 9,
        value: "What should I do if I fail to receive an OTP?",
        description: "Check your network connection to ensure you can receive email/sms. You can also choose to resend OTP to ensure that it works. If it doesn't work after this contact support"
    },
    {
        id:10,
        value: "What should I do if I encounter a problem on Kasuwa?",
        description: "If you encounter any problems with Kasuwa, please contact our support team for assistance. You can reach us by our email tradekasuwa@agriarche.com or via phone at +234 902 456 9374."
    },
    {
        id:11,
        value: "What are your support hours?",
        description: "Our support team is available 24/7 to assist you with any issues or questions you may have."
    },
    {
        id:12,
        value: "How quickly can I expect a response from your team?",
        description: "Our support team aims to respond to all inquiries within 2 hours. However, response times may vary depending on the volume of requests we receive."
    },
    {
        id:13,
        value: "What is the mode of payment on kasuwa for sellers",
        description: "Payment is made instantly into the user's dedicated wallet account, but can extend to 24-72 hrs during weekends or where there is network downtime from the financial institutions."
    },
    {
        id:14,
        value: "How do I place an order on kasuwa?",
        description: "First download the kasuwa app, go to available orders, click and follow the on screen instructions."
    },
    {
        id:15,
        value: "Where do I deliver my grains to?",
        description: "Commodities can be delivered to any of our fulfillment or collection centers closest to you. T&C applied."
    },
    {
        id:16,
        value: "Where are your fulfillment centers located?",
        description: "We have fulfillment centers in Lafia lamorde, Adamawa state. Biliri, Gombe state. Hadejia, Jigawa state. Ikpayango, Benue state. Pambegua, Kaduna state and Giwa, Kaduna State. "
    },
    {
        id:17,
        value: "How can I locate a center?",
        description: "Check our website For information on location of our various centers."
    },
    {
        id:18,
        value: "What kind of insights does kasuwa provide?",
        description: "Weekly market price updates are provided on kasuwa, which helps users make informed decisions. This data is essential for users  to stay updated on market trends and make informed decisions about their production, pricing, and sales strategies."
    },
    {
        id:19,
        value: "What is the estimated delivery time for Orders?",
        description: "There is no precise estimate since the locations vary but in all locations in Nigeria, it is not more than 5 days."
    },
    {
        id:20,
        value: "How do I track My truck?",
        description: "Truck Tracking is done on kasuwa as the location of the truck is updated and mail is sent to the user"
    },
    {
        id:21,
        value: "Is the logistics free?",
        description: "No, we do not offer free logistics, but you have the opportunity to provide your own logistics and we can still track it on your behalf."
    },
    {
        id:22,
        value: "Can I Change my delivery Address?",
        description: "Yes, you can by just checking the closest collection center close to you."
    },
    {
        id:23,
        value: "Where are your fulfillment centers located?",
        description: "We are located in Northcentral, North East, and North West."
    },
    {
        id:24,
        value: "Why should I have Kasuwa Account?",
        description: "For Easy trade settlement and quick transaction after delivery. And, To perform other transactions aside from grain transactions."
    },
    {
        id:25,
        value: "Why BVN?",
        description: "For Compliance/kyc purpose, To complete kasuwa registration and To link account with BvN according to CBN regulation"
    },
    {
        id:26,
        value: "Why NIN?",
        description: "It is a new CBN policy that any account opening whether wallet account or Bank account must provide BVN and NIN linkage."
    },
    {
        id:27,
        value: "Does Kasuwa cover all products?",
        description: "Commodities available on Kasuwa now are Paddy Rice, Maiza, SoyBean, Sesame, Groundnut, Cashew, Cocoa. Many more products are coming SOON!"
    }
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
                {/*<Accordion multiple defaultValue={questions.map(el => el.value)}>*/}
                <Accordion defaultValue="What is Kasuwa?">
                    {items}
                </Accordion>
            </Paper>
        </section>
    )
}
