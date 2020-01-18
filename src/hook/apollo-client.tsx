import { useStoreState } from '../store';
import { useMemo } from 'react';
import { ApolloClient, DefaultOptions } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

export function useClient() {
  const endpoint = useStoreState(state => state.globalConfig.endpoint);

  const client = useMemo(() => {
    const defaultOptions: DefaultOptions = {
      watchQuery: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'ignore',
      },
      query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
      },
    };
    return new ApolloClient({
      cache: new InMemoryCache(),
      defaultOptions,
      link: new HttpLink({
        uri: endpoint,
      }),
    });
  }, [endpoint]);

  return [client];
}
