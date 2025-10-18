import mixpanel from 'mixpanel-browser';

const MIXPANEL_TOKEN = '61d3bc721edfe64dbfb89a8dd182d7a3';


mixpanel.init(MIXPANEL_TOKEN, {
  debug: process.env.NODE_ENV !== 'production',
});

export default mixpanel;