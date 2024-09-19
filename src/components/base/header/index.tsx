import { Link, useNavigate } from "react-router-dom";
import { useMediaQuery, useDisclosure } from "@mantine/hooks";
import { Box, Button, Burger, useMantineTheme } from "@mantine/core";

import styles from './header.module.scss';
import PricingIndex from '@/components/ui/pricingIndex';

import logo from "@/assets/logo.svg";

export default function Header() {
    const navigate = useNavigate();
    const [opened, { toggle }] = useDisclosure();

    const theme = useMantineTheme();
    const break_md = useMediaQuery(`(min-width: ${theme.breakpoints.md})`);

    return (
        <header className={styles.header}>
            <PricingIndex />

            <Box className={styles.box}>
                <img className={styles.box__logo} src={logo} alt="Kasuwa" />

                <ul className={styles.box__list}>
                    <li className={styles.box__list__item}>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    {/* <li className={styles.box__list__item}>
                        <Text fz={13} fw={400}>
                            <NavLink 
                                to="/marketplace"
                                className={({isActive, isPending}) => 
                                    isPending ? styles.isPending : 
                                    isActive ? styles.isActive : ""
                                }
                            >
                                Marketplace
                            </NavLink>
                        </Text>
                    </li> */}
                    <li className={styles.box__list__item}>
                        <Link to="/support">
                            Support
                        </Link>
                    </li>
                    <li>
                        <Button 
                            size="md" 
                            fz={11} 
                            fw={500} 
                            color="orange.5" 
                            tt="uppercase"
                            onClick={() => navigate("/login")}
                        >
                            Get Started
                        </Button>
                    </li>
                </ul>

                <Burger 
                    opened={opened} 
                    onClick={toggle} 
                    aria-label="toggle nav"
                    display={break_md ? "none" : "block"} 
                />
            </Box>
        </header>
    )
}
