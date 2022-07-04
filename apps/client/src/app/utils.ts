import { createReactQueryHooks } from '@trpc/react';
import type { AppRouter } from '@repro/shared/trpc-router';

export const {
  Provider,
  createClient,
  useContext,
  useQuery,
  useMutation,
  useSubscription,
  useDehydratedState,
  useInfiniteQuery,
} = createReactQueryHooks<AppRouter>();
