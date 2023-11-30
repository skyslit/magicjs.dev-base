import React from 'react';
import { createComponent } from "@skyslit/ark-frontend";
import loginServer from './login.server';
import config from './config.json';

export default createComponent(() => {
    const [msg, setMsg] = React.useState('');

    React.useEffect(() => {
        loginServer('Dameem').then(setMsg).finally(() => console.log('config', config));
    }, []);

    return (
       <div>{msg || 'Please wait...'}</div>
    )
});