import { notifications, type NotificationData } from "@mantine/notifications";
import classes from "./toast.module.scss";

const err__options = (params: {title?: string; message: string;}) => {
    const { title="An error occurred!", message } = params;
    return {
        title,
        message,
        radius: "md",
        color: "white",
        classNames: {
            title: classes.title,
            root: classes.errorRoot,
            description: classes.description,
            closeButton: classes.errorCloseButton,
        },
    } as NotificationData;
}

const success__options = (params: {title?: string; message: string;}) => {
    const { title="Success!", message } = params;
    return {
        title,
        message,
        radius: "md",
        color: "white",
        classNames: {
            title: classes.title,
            root: classes.successRoot,
            description: classes.description,
            closeButton: classes.successCloseButton,
        },
    } as NotificationData;
}


export const toast = {
    error: (props:{title?:string, message:string}) => {
        const { title, message } = props;
        notifications.show(err__options({
            title,
            message
        }))
    },
    success: (props:{title?:string, message:string}) => {
        const { title, message } = props;
        notifications.show(success__options({
            title,
            message
        }))
    },
}
