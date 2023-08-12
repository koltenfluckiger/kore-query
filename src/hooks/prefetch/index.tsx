import {QueryClient} from "@tanstack/react-query";
import React from "react";

function useReactQueryPrefetch({
  queryContext,
  queryKey,
  queryFunc,
}: {
  queryContext: React.Context<QueryClient>;
  queryKey: Array<string>;
  queryFunc: Awaited<Promise<any>>;
}) {
  const queryClient = React.useContext(queryContext);
  return queryClient.prefetchQuery({
    queryKey: queryKey,
    queryFn: async () => {
      const {data} = await queryFunc();
      return data;
    },
  });
}
export default useReactQueryPrefetch;
