import { useRef } from 'react';
import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useNavigate } from 'react-router-dom';
import { TbMessageShare } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import { Group, Title, Text, Image, Box, Button, Stack, Paper, useMantineTheme } from "@mantine/core";

import styles from "./orders.module.scss";

import { mediaUrl } from '@/helpers/request';
import { useGetPublicOrders } from '@/services/orders';

export default function Orders() {
    const navigate = useNavigate();
    const autoplay = useRef(Autoplay({ delay: 2000 }));

    const theme = useMantineTheme();

    const { data, status } = useGetPublicOrders();

    const _renderLoader = () => {
        return (
            <div className={styles.loader}>
                {[...Array(4).keys()].map((_, idx) => (
                    <div key={idx} className={styles.loader__card}>
                        <div className={styles.loader__card__img} />
                        <Group justify="space-between">
                            <div className={styles.loader__card__stub} />
                            <div className={styles.loader__card__stub} />
                        </Group>
                        <Group justify="space-between">
                            <div className={styles.loader__card__title} />
                            <div className={styles.loader__card__sub} />
                        </Group>
                        <Group>
                            <div className={styles.loader__card__desc} />
                            <div className={styles.loader__card__desc} />
                        </Group>
                        <div className={styles.loader__card__btn} />
                    </div>
                ))}
            </div>
        )
    }

    const _renderData = () => {
        if(status === "pending") return _renderLoader();
        else return (
            <Carousel 
                loop
                align="start"
                withIndicators={true}
                plugins={[autoplay.current]}
                slideGap={{ base: 0, sm: 'xs' }}
                slideSize={{ base: '100%', xs: '50%', sm: '40%', md: '30%', lg: "25%" }}
                onMouseEnter={autoplay.current.stop}
                onMouseLeave={autoplay.current.reset}
                classNames={{
                    root: styles.root,
                    controls: styles.controls
                }}
            >
                {data?.map((el) => (
                    <Carousel.Slide key={el.id} p="xs">
                        <Paper className={styles.orders__slide}>
                            <Stack gap="md">
                                <Box className={styles.orders__slide__img}>
                                    <Image src={`${mediaUrl}${el.commodityImage}`} alt="comm" w="100%" h="100%" />
                                </Box>
                                <Group justify="space-between">
                                    <Group gap={2}>
                                        <IoLocationOutline color={theme.colors.orange[8]} />
                                        <Text size="xs" fw={300}>{el.state}</Text>
                                    </Group>
                                    <Text size="xs" fw={300}>
                                        {el.quantity.toLocaleString("en", {minimumFractionDigits: 2})} MT
                                    </Text>
                                    {/* <Group gap="xs">
                                        <PiUsersThree color={theme.colors.orange[8]} />
                                        <Text size="xs" fw={300}>
                                            {Math.floor(Math.random() * 9) + 1} sellers watching
                                        </Text>
                                    </Group> */}
                                </Group>
                            </Stack>

                            <Stack gap="xl">
                                <Stack gap={10}>
                                    <Group justify="space-between">
                                        <Text size="sm" fw={500}>{el.commodityName}</Text>
                                        <Text size="sm" fw={500}>
                                            ₦{el.price.toLocaleString("en", {minimumFractionDigits: 2})}
                                        </Text>
                                    </Group>
                                    <Text size="xs" fw={300} lh={1.7} c="gray.7" lineClamp={2}>
                                        {el.specification}. The duration for this order is {el.duration}, after which 
                                        the order will be closed.
                                    </Text>
                                </Stack>

                                <Group>
                                    <Button 
                                        fz={11} 
                                        size="md"
                                        color="orange.5"  
                                        fw={500} 
                                        flex={1}
                                        tt="uppercase"
                                        variant='filled'
                                        onClick={() => navigate(`/login?redirect=dashboard/orders/open&tradeId=${el.id}&action=preview`)}
                                    >
                                        Accept Trade
                                    </Button>

                                    <Button 
                                        fz={11} 
                                        size="md"
                                        color="orange.5"  
                                        fw={500} 
                                        flex={0.8}
                                        tt="uppercase"
                                        variant='light'
                                        rightSection={<TbMessageShare size={16} />}
                                        onClick={() => null}
                                    >
                                        Share
                                    </Button>
                                </Group>
                            </Stack>
                        </Paper>
                    </Carousel.Slide>
                ))}
            </Carousel>
        )
    }

    return (
        <section className={styles.orders}>
            <Stack align='center'>
                <Title fw={600} c="#364330">
                    Find Opportunities on <span className={styles.orders__span}>Kasuwa</span>
                </Title>
                <Text size="sm" fw={300} w={320} ta="center" c="gray.7">
                    Are you a supplier of Agric commodities, fulfill orders from
                    local and internation buyers.
                </Text>
            </Stack>

           {_renderData()}
        </section>
    )
}
