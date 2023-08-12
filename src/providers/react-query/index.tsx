declare namespace KoreQuery {
  interface ReactQueryOptions {
    queries: Object;
  }
}

import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import React, { ReactElement, createContext, useContext, useState } from "react";

// @ts-ignore
const KoreQueryContext: React.Context<QueryClient> = createContext({});

const queryClientFactory = ({
  newOptions,
  queryCacheOptions,
  mutationCacheOptions,
}: {
  newOptions: Object;
  queryCacheOptions: object;
  mutationCacheOptions: Object;
}): QueryClient => {
  // @ts-ignore

  return new QueryClient({
    defaultOptions: newOptions,
    mutationCache: new MutationCache(mutationCacheOptions),
    queryCache: new QueryCache(queryCacheOptions),
  });
};

const ReactQuery = ({
  children,
  options = {
    queries: {
      staleTime: 0.5 * 24 * 60 * 60,
      cacheTime: 1 * 24 * 60 * 60,
      suspense: true,
      notifyOnChangeProps: "tracked",
      useErrorBoundary: false,
    },
  },
  customOptions = {},
  queryCacheOptions = {},
  mutationCacheOptions = {},
}: {
  children: JSX.Element;
  options?: KoreQuery.ReactQueryOptions;
  customOptions?: Object;
  queryCacheOptions?: Object;
  mutationCacheOptions?: Object;
}): React.Context<QueryClient> | ReactElement<any, any> => {
  const newOptions: Object = {...options, ...customOptions};
  const client = queryClientFactory({
    newOptions,
    queryCacheOptions,
    mutationCacheOptions,
  });
  const [newClient] = useState(() => client);
  console.log(newClient);

  return (
    // @ts-ignore
    <QueryClientProvider
      client={newClient}
      // @ts-ignore
      context={KoreQueryContext}
    >
      {children}
    </QueryClientProvider>
  );
};
const useReactQueryClient = () => {
  // @ts-ignore
  return useContext(KoreQueryContext);
};

const useReactQueryContext = () => {
  return KoreQueryContext;
};

export {
  KoreQueryContext,
  ReactQuery,
  useReactQueryClient,
  useReactQueryContext
};

