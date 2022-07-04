import { useState } from 'react';

import { QueryClient, QueryClientProvider } from 'react-query';
import superjson from 'superjson';
import { DictionaryPage } from './dictionary-page';
import { createClient, Provider } from './utils';

export function App() {
  const [queryClient] = useState(() => new QueryClient());

  const [trpcClient] = useState(() =>
    createClient({
      url: '/trpc',
      transformer: superjson,
    })
  );

  return (
    <Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <DictionaryPage />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
