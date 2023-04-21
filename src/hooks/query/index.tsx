import { KoreQueryContext, useReactQueryClient } from "../../providers";
import { QueryClient, useQuery, useQueryClient } from "@tanstack/react-query";

import React from "react";
function useReactQuery({
  queryContext,
  queryKey,
  queryFunc,
}: {
  queryContext: React.Context<QueryClient | undefined>;
  queryKey: Array<string>;
  queryFunc: Awaited<Promise<any>>;
}) {
  return useQuery({
    // @ts-ignore
    queryKey: queryKey,
    queryFn: async () => {
      const { data } = await queryFunc();
      return data;
    },
    context: queryContext,
  });
}

export default useReactQuery;
