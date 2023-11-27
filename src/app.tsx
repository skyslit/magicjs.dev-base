import { createServer } from '@skyslit/ark-backend';

export default () => createServer((instance) => {
    instance.setPort(8081);
});