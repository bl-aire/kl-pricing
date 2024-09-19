import { Link, useNavigate } from "react-router-dom";
import { useMediaQuery, useDisclosure } from "@mantine/hooks";
import { Box, Button, Burger, useMantineTheme, Menu } from "@mantine/core";

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
                <Link to="/">
                    <img className={styles.box__logo} src={logo} alt="Kasuwa" />
                </Link>

                <div>
                    {break_md &&
                        <ul className={styles.box__list}>
                            <li className={styles.box__list__item}>
                                <Link to="/">
                                    Home
                                </Link>
                            </li>

                            <li className={styles.box__list__item}>
                                <Link to="/support">
                                    Support
                                </Link>
                            </li>
                            <li className={styles.box__list__item}>
                                <Link to="/legal-policies">
                                    Legal Policies
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
                    }

                    <Menu
                        shadow="md"
                        width={300}
                    >
                        <Menu.Target>
                            {
                                break_md ? <span className="placeholder"></span> :
                                    <Burger
                                        opened={opened}
                                        onClick={toggle}
                                        aria-label="toggle nav"
                                    />

                            }

                        </Menu.Target>

                        <Menu.Dropdown>
                            <Menu.Item component={Link} to="/">
                                Home
                            </Menu.Item>
                            <Menu.Item component={Link} to="/support">
                                Support
                            </Menu.Item>
                            <Menu.Item component={Link} to="/legal-policies">
                                Legal Policies
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                </div>
            </Box>
        </header>
    )
}
