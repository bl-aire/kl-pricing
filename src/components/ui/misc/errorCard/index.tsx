import { Paper, Stack, Title, Text, Button, Group, Image } from "@mantine/core";
import { PiCaretRight } from "react-icons/pi";

import errorImg from "@/assets/error.svg";
import styles from "./errorCard.module.scss";

interface ErrorCard {
    name?:string;
    error?: Error | null;
    loading: boolean;
    retry: () => void;
}

export default function ErrorCard({loading, retry, error, name="data"}:ErrorCard) {
    return (
        <Paper className={styles.error}>
            <Stack className={styles.error__stack} align="center" gap="xs">
                <Image className={styles.error__img} src={errorImg} alt="error" />
                <Title fz={18} fw={500}>
                    Error fetching {name}.
                </Title>
                {error ? (
                    <Text ta="center" w="80%" size="xs" fw={300} c="gray.8" lineClamp={4}>
                        We are unable to display the requested data due to the following error 
                        from the Kasuwa backend service: {" "}
                        <Text mt="lg" ta="center" w="80%" size="xs" fw={500} c="red.8" span>
                            {JSON.stringify(error).replace(".", ". ")}
                        </Text>
                    </Text>
                ) : (
                    <Text ta="center" w="80%" size="xs" fw={300} c="gray.8">
                        We're currently unable to display the requested data due to an issue. 
                        Please try again, should this issue persist, kindly contact us.
                    </Text>
                )}
            </Stack>   

            <Group mt="xl">
                <Button 
                    fz={11} 
                    fw={500} 
                    variant="outline"
                    onClick={retry} 
                    loaderProps={{size: 15}} 
                    loading={loading} 
                    tt="uppercase" 
                    color="red.8"
                >
                    Contact Support
                </Button>
                <Button 
                    fz={11} 
                    fw={500} 
                    rightSection={<PiCaretRight/>}
                    onClick={retry} 
                    loaderProps={{size: 15}} 
                    loading={loading} 
                    tt="uppercase" 
                    color="red.8"
                >
                    Retry Request
                </Button>
            </Group>       
        </Paper>
    )
}
