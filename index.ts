import { Application } from 'https://deno.land/x/oak/mod.ts';
import router from './Routes/index.routes.ts';

const PORT = 3000;

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Listen on port ${PORT}`);
await app.listen({ port: PORT });
