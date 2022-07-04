import { appRouter } from '@repro/shared/trpc-router';
import * as trpcExpress from '@trpc/server/adapters/express';
import * as express from 'express';

const setup = async () => {
  const app = express();

  app.use(
    '/trpc',
    trpcExpress.createExpressMiddleware({
      router: appRouter,
    })
  );

  const port = process.env.port || 3333;
  const server = app.listen(port, () => {
    console.log('Listening at http://localhost:' + port + '/api');
  });

  server.on('error', console.error);
};

setup();
