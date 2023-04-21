declare namespace KoreQuery {
  interface ReactQueryOptions {
    queries: Object;
  }
}

import {
  QueryClient,
  QueryClientProvider,
  useQueryClient,
} from "@tanstack/react-query";
import React, {
  ReactElement,
  createContext,
  useContext,
  useState,
} from "react";

// @ts-ignore
const KoreQueryContext: React.Context<QueryClient> = createContext({});

const queryClientFactory = () => {
  // @ts-ignore
  window.KoreQueryContext = KoreQueryContext;
  return new QueryClient();
};

const ReactQuery = ({
  children,
  options = {
    queries: {
      staleTime: 0.5 * 24 * 60 * 60,
      cacheTime: 1 * 24 * 60 * 60,
      suspense: true,
    },
  },
}: {
  children: JSX.Element;
  options?: KoreQuery.ReactQueryOptions;
}): React.Context<QueryClient> | ReactElement<any, any> => {
  const client = queryClientFactory();
  const [newClient] = useState(
    () =>
      new QueryClient({
        queryCache: client.getQueryCache(),
        mutationCache: client.getMutationCache(),
        defaultOptions: options,
      })
  );

  return (
    // @ts-ignore
    <QueryClientProvider
      client={newClient}
      // @ts-ignore
      context={KoreQueryContext}
      contextSharing={true}
    >
      {children}
    </QueryClientProvider>
  );
};
const useReactQueryClient = () => {
  // @ts-ignore: Unreachable code error
  return useContext(KoreQueryContext);
};

export { useReactQueryClient, ReactQuery, KoreQueryContext };
