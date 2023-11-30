import {QueryClient, useQuery} from "@tanstack/react-query";

import React from "react";
import {Time} from "../../utils";
import {useKoreQueryContext} from "../../providers";

function useKoreQuery({
  queryContext = useKoreQueryContext(),
  queryKey,
  queryFunc,
  queryOptions,
}: {
  queryContext: React.Context<QueryClient | undefined>;
  queryKey: Array<string>;
  queryFunc: Awaited<Promise<any>>;
  queryOptions: Object;
}) {
  return useQuery({
    // @ts-ignore
    queryKey: queryKey,
    queryFn: async () => {
      try {
        const {data} = await queryFunc();
        return data;
      } catch (err) {
        console.log(err);
        throw err;
      }
    },
    context: queryContext,
    ...queryOptions,
  });
}

function useKoreQueryAutoRefetch({
  refetchInterval = Time.convert({
    to: Time.TYPES.MILLISECONDS,
    hours: 1,
    minutes: 0,
    seconds: 0,
    days: 0,
  }),
  queryContext = useKoreQueryContext(),
  queryKey,
  queryFunc,
}: {
  refetchInterval: number | undefined;
  queryContext: React.Context<QueryClient | undefined>;
  queryKey: Array<string>;
  queryFunc: Awaited<Promise<any>>;
}) {
  return useQuery({
    // @ts-ignore
    queryKey: queryKey,
    queryFn: async () => {
      const {data} = await queryFunc();
      return data;
    },
    context: queryContext,
    refetchInterval: refetchInterval,
  });
}
export {useKoreQuery, useKoreQueryAutoRefetch};
