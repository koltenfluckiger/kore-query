declare namespace KoreQuery {
  interface ReactQueryOptions {
    queries: Object;
  }
}

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { ReactElement, useState } from "react";

const queryClientFactory = () => {
  return new QueryClient();
};

const ReactQuery = ({
  children,
  options,
}: {
  children: JSX.Element;
  options?: KoreQuery.ReactQueryOptions;
}): ReactElement => {
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
    <QueryClientProvider client={newClient}>{children}</QueryClientProvider>
  );
};

export default ReactQuery;
