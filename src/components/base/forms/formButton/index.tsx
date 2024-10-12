import { Button, type ButtonProps } from "@mantine/core";

interface FormButtonProps extends ButtonProps,
    Omit<React.ComponentPropsWithoutRef<'button'>, keyof ButtonProps> {}

export default function FormButton({children, ...otherProps}:FormButtonProps) {
    return (
        <Button 
            size="lg" 
            color="orange.5"
            fz={12}
            fw={500}
            tt="uppercase"
            loaderProps={{ size: "xs" }}
            {...otherProps}
        >
            {children}
        </Button>
    )
}
