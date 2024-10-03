import { useForm } from "@mantine/form";
import { Title, Text, Stack, Box } from "@mantine/core";

import styles from "./form.module.scss";
import FormInput from "@/components/base/forms/formInput";
import FormButton from "@/components/base/forms/formButton";
import FormTextArea from "@/components/base/forms/formTextArea";

export default function Form() {
    const form = useForm({
        initialValues: {
            fullName: "",
            email: "",
            phoneNumber: "",
            message: "",
        },
        validate: {
            fullName: (value => value ? null : "Full name is required"),
            email: (value => value ? null : "Email is required"),
            phoneNumber: (value => value ? null : "Phone number is required"),
            message: (value => value ? null : "Message is required"),
        }
    });

    const handleSubmit = (values: typeof form.values) => {
        console.log(values);

        const email = "tradekasuwa@agriarche.com";
        const subject =`Inquiry about....from ${values.fullName} with phone number ${values.phoneNumber}`;
        const body = values.message;
        window.open(`mailto:${email}?subject=${subject}&body=${body}`);
    }
    
    return (
        <section className={styles.form}>
            <Box className={styles.form__box}>
                <Stack align="center">
                    <Title order={1} fw={600}>
                        Still Got Questions?
                    </Title>
                    <Text size="sm" fw={300}>
                        Feel free to reach out to us and we'll reply 
                        as soon as possible.
                    </Text>
                </Stack>

                
                <form onSubmit={form.onSubmit(handleSubmit)}>
                    <Stack>
                        <FormInput 
                            size="lg"
                            label="Full name"
                            placeholder="John Snow"
                            {...form.getInputProps("fullName")}
                        />
                        <FormInput 
                            size="lg"
                            label="Email"
                            placeholder="jon.snow@edstark.com"
                            {...form.getInputProps("email")}
                        />
                        <FormInput 
                            size="lg"
                            label="Phone number"
                            placeholder="2349065341290"
                            {...form.getInputProps("phoneNumber")}
                        />
                        <FormTextArea 
                            size="lg"
                            rows={4}
                            label="How can we help you?"
                            placeholder="Message"
                            {...form.getInputProps("message")}
                        />
                        <FormButton mt="lg" type="submit" color="orange.5">
                            Get in Touch
                        </FormButton>
                    </Stack>
                </form>
            </Box>
        </section>
    )
}
