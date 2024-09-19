import { Title, Text, Stack } from "@mantine/core";
import { Carousel } from "@mantine/carousel";

import styles from "./about.module.scss";

import about_1 from "@/assets/about-1.webp";
import about_2 from "@/assets/about-2.webp";
import about_3 from "@/assets/about-3.webp";

import p1 from "@/assets/partners/usiad.svg";
import p2 from "@/assets/partners/mercy-corps.svg";
import p3 from "@/assets/partners/ifdc.svg";
import p4 from "@/assets/partners/prembly.svg";
import p5 from "@/assets/partners/olam.svg";
import p6 from "@/assets/partners/fcmb.svg";
import p7 from "@/assets/partners/feed-the-future.svg";

const partners = [p1, p2, p3, p4, p5, p6, p7];

export default function About() {
    return (
        <section className={styles.about}>
            <div className={styles.about__banner}>
                <Carousel 
                    loop
                    align="start"
                    slideGap={{ base: 0, sm: 'xs' }}
                    slideSize={{ base: '55%', xs: "50%", sm: '25%', md: '20%', lg: '16%', xl: "14%" }}
                    slidesToScroll={1}
                    withControls={false}
                    withIndicators={false}
                >
                    {partners.map(partner => (
                        <Carousel.Slide key={partner}>
                            <img 
                                className={styles.about__banner__img} 
                                src={partner} 
                                alt="partner" 
                            />
                        </Carousel.Slide>
                    ))}
                </Carousel>
            </div>

            <div className={styles.about__content}>
                <Title order={1} fw={600}>
                    One Hub, Endless Opportunities
                </Title>
                <Text size="sm" fw={300}>
                    Our product is focused on improving the experiences of all agriculture
                    players by providing more efficient ways to access information, markets,
                    finance, and opportunities that help solve the key challenges in the agricultural
                    sector
                </Text>
            </div>

            <div className={styles.about__info}>
                <div className={styles.about__info__col}>
                    <img className={styles.about__info__col__img} src={about_1} alt="abt-1" />

                    <article className={styles.about__info__col__box}>
                        <Stack>
                            <Title order={1} fw={600}>
                                Access Viable Markets.
                            </Title>
                            <Text size="sm" fw={300} lh={1.7}>
                                Access to good markets is crucial for farmers to earn more and reduce waste. 
                                Kasuwa, an Agri-tech platform, helps farmers connect with the right buyers, 
                                offering tools to find the best prices and ensure safe transactions. This way, 
                                farmers can sell their products quickly, reach new buyers, and grow their 
                                businesses.
                            </Text>
                            <Text size="sm" fw={300} lh={1.7}>
                                With Kasuwa, farmers can easily find reliable buyers, get paid securely, 
                                and deliver their products on time. The platform makes it simple for 
                                farmers to access better markets, helping them increase their income and 
                                succeed in the agricultural industry.
                            </Text>
                        </Stack>
                    </article>
                </div>

                <div className={styles.about__info__col}>
                    <article className={styles.about__info__col__box}>
                        <Stack>
                            <Title order={1} fw={600}>
                                Quick Payments.
                            </Title>
                            <Text size="sm" fw={300} lh={1.7}>
                                Getting paid quickly is vital for farmers to keep their businesses 
                                running smoothly. Kasuwa, an Agri-tech platform, ensures that farmers 
                                receive their payments promptly and securely. This helps them manage 
                                their finances better, reinvest in their operations, and avoid cash flow problems.
                            </Text>
                            <Text size="sm" fw={300} lh={1.7}>
                                Kasuwa simplifies the payment process, allowing farmers to focus on 
                                growing and selling their products without worrying about delays. By 
                                offering secure and fast payment options, the platform supports farmers 
                                in maintaining a steady income and thriving in the agricultural industry.
                            </Text>
                        </Stack>
                    </article>
                    <img className={styles.about__info__col__img} src={about_2} alt="abt-2" />
                </div>

                <div className={styles.about__info__col}>
                    <img className={styles.about__info__col__img} src={about_3} alt="abt-3" />
                    <article className={styles.about__info__col__box}>
                        <Stack>
                            <Title order={1} fw={600}>
                                Manage Logistics Requests.
                            </Title>
                            <Text size="sm" fw={300} lh={1.7}>
                                Having access to reliable logistics and market information is 
                                crucial for farmers to succeed. Kasuwa, an Agri-tech platform, 
                                provides farmers with up-to-date market data and connects them with 
                                logistics services. This helps farmers make informed decisions 
                                about when and where to sell their products and ensures their 
                                goods are delivered efficiently.
                            </Text>
                            <Text size="sm" fw={300} lh={1.7}>
                                With Kasuwa, farmers can easily access the information and services 
                                they need to reach the right markets at the right time. The platform 
                                supports farmers in optimizing their operations, reducing waste, and increasing 
                                their profits by providing essential tools for navigating the agricultural market
                            </Text>
                        </Stack>
                    </article>
                </div>
            </div>
        </section>
    )
}
