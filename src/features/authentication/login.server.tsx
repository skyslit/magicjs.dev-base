import { createBackendFunction, useFunctionContext } from '@skyslit/ark-backend';

export default createBackendFunction(async function (firstName) {
    const ctx = useFunctionContext(this);

    
    return `Hello ${firstName}`;
});
