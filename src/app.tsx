import { createServer } from '@skyslit/ark-backend';
import { resolveEnv } from './mern.ai-services/credentials';

export default () => resolveEnv()
.then(() => createServer(async (instance) => {
    await resolveEnv();

    instance.setPort(3000);
}));
