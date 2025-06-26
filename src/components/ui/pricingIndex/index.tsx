import { useRef } from 'react';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import Autoplay from 'embla-carousel-autoplay';
import { Box, Text, Group, useMantineTheme } from "@mantine/core";

import styles from "./pricingIndex.module.scss";

import { getShortState } from '@/utils/default';
import { useGetPricings } from '@/services/pricings';

export default function PricingIndex() {
    const autoplay = useRef(Autoplay({ delay: 2000 }));

    const theme = useMantineTheme();
    const break_xl = useMediaQuery(`(min-width: ${theme.breakpoints.xl})`);
    const break_lg = useMediaQuery(`(min-width: ${theme.breakpoints.lg})`);
    const break_md = useMediaQuery(`(min-width: ${theme.breakpoints.md})`);
    const break_sm = useMediaQuery(`(min-width: ${theme.breakpoints.sm})`);
    const break_xs = useMediaQuery(`(min-width: ${theme.breakpoints.xs})`);

    const  { data, status } = useGetPricings();
    
    const _renderLoader = () => {
        let el;
        break_xl ? el = 7 : 
        break_lg ? el = 6 : 
        break_md ? el = 5 : 
        break_sm ? el = 4 : 
        break_xs ? el = 3 : 
        el = 1;
        return (
            <Box className={styles.loader}>
                {[...Array(el).keys()].map((_, el) => (
                    <Group key={el} wrap="nowrap" style={{textWrap: "nowrap"}}>
                        <div className={styles.loader__dot} />
                        <div className={styles.loader__block} />
                    </Group>
                ))}
            </Box>
        )
    };

    const _renderData = () => {
        if(status === "pending") return _renderLoader();
        else return (
            <Box display="block" className={styles.carousel}>
                <Carousel 
                    loop
                    align="start"
                    withIndicators={false}
                    plugins={[autoplay.current]}
                    slideGap={{ base: 0, sm: 'xs' }}
                    slideSize={{ base: '70%', xs: "50%", sm: '25%', md: '20%', lg: '20%', xl: "20%" }}
                    onMouseEnter={autoplay.current.stop}
                    onMouseLeave={autoplay.current.reset}
                    classNames={{
                        root: styles.root,
                        controls: styles.controls
                    }}
                >
                    {data?.content.map((el) => {
                        const color = Math.sign(el.percentage) === -1 ? theme.colors.lime[9] : theme.colors.red[9];
                        return (
                            <Carousel.Slide key={el.id} p="xs" style={{borderRight: `1px solid ${theme.colors.gray[1]}`, margin: "auto"}}>
                                <Group gap="xs" justify='center' wrap="nowrap">
                                    <Text fz={12.5} fw={400}>
                                        {el.commodityName} ({getShortState(el.location)})
                                    </Text>
                                    <Text size="xs" fw={500} c={color} >
                                        ₦{el.price}
                                    </Text>
                                </Group>
                            </Carousel.Slide>
                        )
                    })}
                </Carousel>
            </Box>
        )
    }

    return (
        <div className={styles.container}>
            <Box display="block" className={styles.label}>
                <Text size="xs" fw={400} c="white">
                    Market Prices
                </Text>
            </Box>
            {_renderData()}            
        </div>
    )
}
