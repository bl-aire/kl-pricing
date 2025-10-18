declare module '@/utils/mixpanel' {
    const mixpanel: {
        track(event: string, props?: Record<string, any>): void;
        identify?(id: string): void;
        [key: string]: any;
    };
    export default mixpanel;
}