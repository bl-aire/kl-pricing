import { isRouteErrorResponse, useRouteError, useNavigate } from "react-router-dom";
import { Paper, Title, Text, Group, Stack, List, Button } from "@mantine/core";
import { TbInfoSquareRounded } from "react-icons/tb";

import styles from "./errorBoundary.module.scss";

import loginBgLeft from "@/assets/login-bg-l.svg";
import loginBgRight from "@/assets/login-bg-r.svg";

export default function ErrorBoundary() {
  const navigate = useNavigate();
  const error = useRouteError();

  const contactSupport = () => {
    window.open("https://wa.me/+2349024569374");
  }

  if(isRouteErrorResponse(error)){
    return (
      <section className={styles.section}>
        <Paper className={styles.paper}>
          <TbInfoSquareRounded size={40} />

          <Stack>
            <Title order={2} fw={600} c="#364330">
              Something went wrong.
            </Title>

            <Text size="sm" fw={300} c="gray.7" style={{lineHeight: "3ch"}}>
              Looks like the page you requested is lost in the 
              digital wilderness. Don't worry, these things happen. 
              If you still can't find what you need? Contact us! We're 
              always happy to help. Here are a few ways we can get you back on track:
            </Text>

            <List spacing="xs" size="sm" fw={300} c="gray.7">
              <List.Item>
                Double-check the URL: Did you mistype something? 
                Sometimes a typo can throw you off course.
              </List.Item>

              <List.Item>
                Head back to our homepage: Our homepage has all the 
                main sections and resources neatly organized.
              </List.Item>
            </List>
            
            <Text size="sm" fw={400} c="red.8">
              {error.data || ""}
            </Text>

            <Group mt="lg" justify="flex-end">
              <Button tt="uppercase" size="md" fw={400} fz={13} onClick={() => navigate(-1)}>
                Take me back
              </Button>
              <Button 
                variant="light" 
                tt="uppercase" 
                size="md" 
                fw={400} 
                fz={13} 
                onClick={contactSupport}
              >
                Contact support
              </Button>
            </Group>
          </Stack>
        </Paper>

        <img className={styles.section__bg_l} src={loginBgLeft} alt="leaf"/>
        <img className={styles.section__bg_r} src={loginBgRight} alt="leaf"/>
      </section>
    )
  }
}
