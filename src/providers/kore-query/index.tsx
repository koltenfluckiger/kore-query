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
import React, {createContext, useContext, useState} from "react";

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

function KoreQuery({
  // @ts-ignore

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
  ...props
}): {
  children: JSX.Element;
  options?: KoreQuery.ReactQueryOptions;
  customOptions?: Object;
  queryCacheOptions?: Object;
  mutationCacheOptions?: Object;
} {
  const newOptions: Object = {...options, ...customOptions};
  const [queryClient] = useState(() =>
    queryClientFactory({
      newOptions,
      queryCacheOptions,
      mutationCacheOptions,
    })
  );
  // @ts-ignore
  return (
    // @ts-ignore
    <QueryClientProvider
      client={queryClient}
      // @ts-ignore
      context={KoreQueryContext}
    >
      {props.children}
    </QueryClientProvider>
  );
}
const useKoreQueryClient = () => {
  // @ts-ignore
  return useContext(KoreQueryContext);
};

const useKoreQueryContext = () => {
  return KoreQueryContext;
};

export {KoreQuery, KoreQueryContext, useKoreQueryClient, useKoreQueryContext};
