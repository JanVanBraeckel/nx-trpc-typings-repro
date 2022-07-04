import { router } from '@trpc/server';
import superjson from 'superjson';

const dictionaries = [{ id: 1, name: 'foo' }];

export const appRouter = router()
  .query('dictionaries', {
    resolve: () => dictionaries,
  })
  .transformer(superjson);

export type AppRouter = typeof appRouter;
