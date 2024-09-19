import { Link } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";
import { FaLinkedinIn, FaInstagram, FaXTwitter, FaFacebookF } from "react-icons/fa6";
import { Title, Grid, Group, Box, Text, useMantineTheme, Divider } from "@mantine/core";

import styles from "./footer.module.scss";
import brandImg from "@/assets/logo-white.svg";

import loginBgLeft from "@/assets/login-bg-l.svg";
import loginBgRight from "@/assets/login-bg-r.svg";

export default function Footer() {
    const theme = useMantineTheme();
    const break_sm = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

    return (
        <footer className={styles.footer}>
            <Grid gutter={break_sm ? "xl" : "md"} justify="space-between">
                <Grid.Col span={{base: 12, md: 4, lg: 4}}>
                    <div className={styles.footer__col}>
                        {/* <Title order={3} fw={600} c="white">Stay Connected!</Title> */}
                        <img className={styles.footer__col__brand} src={brandImg} alt="Kasuwa" />
                        
                        <Text size="sm" fw={300} c="white">
                            Stay connected with us on social media for the latest 
                            updates, insights, and exclusive content. Follow us,
                            join conversation and never miss out on what's happening in Kasuwa today!
                        </Text>
                        <Group mt="md">
                            <Box className={styles.footer__col__icon}>
                                <FaLinkedinIn />
                            </Box>
                            <Box className={styles.footer__col__icon}>
                                <FaInstagram />
                            </Box>
                            <Box className={styles.footer__col__icon}>
                                <FaXTwitter />
                            </Box>
                            <Box className={styles.footer__col__icon}>
                                <FaFacebookF />
                            </Box>
                        </Group>
                    </div>
                </Grid.Col>
                <Grid.Col span={{base: 12, md: 4, lg: 4}}>
                    <div className={styles.footer__col}>
                        <Title order={3} fw={600} c="white">Contact Us!</Title>
                        <ul className={styles.footer__col__list}>
                            <li className={styles.footer__col__list__item}>
                                <span>Phone</span>: +234 902 456 9374
                            </li>
                            <li className={styles.footer__col__list__item}>
                                <span>Email</span>: tradekasuwa@agriarche.com
                            </li>
                            <li className={styles.footer__col__list__item}>
                                <span>Address</span>: First Floor, Novare Central Office,
                                Plot 502, Dalaba Street, Wuse Zone 5, Wuse, FCT - Abuja,
                                Nigeria
                            </li>
                        </ul>
                    </div>
                </Grid.Col>
                
                <Grid.Col span={{base: 12, md: 2, lg: 2}}>
                    <div className={styles.footer__col}>
                        <Title ta="right" order={3} fw={600} c="white">Quick Links</Title>
                        <ul className={styles.footer__col__list} style={{alignItems: "flex-end"}}>
                            <li className={styles.footer__col__list__item}>
                                <Link to="/">Home</Link>
                            </li>
                            <li className={styles.footer__col__list__item}>
                                <Link to="/support">Support</Link>
                            </li>
                            <li className={styles.footer__col__list__item}>
                                <Link to="/legal-policies">Legal Policies</Link>
                            </li>
                            <li className={styles.footer__col__list__item}>
                                <Link to="/register">Get an Account</Link>
                            </li>
                        </ul>
                    </div>
                </Grid.Col>
            </Grid>

            <Divider color="gray.8" />

            <Group justify="space-between">
                <Text size="sm" fw={300} c="white">
                    Copyright &copy; {new Date().getFullYear()} Kasuwa. All rights reserved
                </Text>
                <Text size="sm" fw={400} c="white">
                    RC - 1715246
                </Text>
            </Group>

            <img className={styles.footer__bg_l} src={loginBgLeft} alt="leaf"/>
            <img className={styles.footer__bg_r} src={loginBgRight} alt="leaf"/>
        </footer>
    )
}
