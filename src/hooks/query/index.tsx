import { QueryClient, useQuery } from "@tanstack/react-query";
import { TYPE, Time } from "../../utils";

import React from "react";
import { useReactQueryContext } from "../../providers";

function useReactQuery({
  queryContext = useReactQueryContext(),
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
      const { data } = await queryFunc();
      return data;
    },
    context: queryContext,
    ...queryOptions,
  });
}

function useReactQueryAutoRefetch({
  refetchInterval = Time.convert({
    to: TYPE.SECONDS,
    hours: 1,
    minutes: 0,
    seconds: 0,
    days: 0,
  }),
  queryContext = useReactQueryContext(),
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
      const { data } = await queryFunc();
      return data;
    },
    context: queryContext,
    refetchInterval: refetchInterval,
  });
}
export { useReactQuery, useReactQueryAutoRefetch };
