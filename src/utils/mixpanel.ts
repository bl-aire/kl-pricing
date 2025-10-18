import mixpanel from 'mixpanel-browser';

const MIXPANEL_TOKEN = '61d3bc721edfe64dbfb89a8dd182d7a3';


mixpanel.init(MIXPANEL_TOKEN, {
  debug: process.env.NODE_ENV !== 'production',
});

/*declare module '@/utils/mixpanel' {
  const mixpanel: {
    track(event: string, props?: Record<string, any>): void;
    identify?(id: string): void;
    [key: string]: any;
  };
  export default mixpanel;
}*/

export default mixpanel;