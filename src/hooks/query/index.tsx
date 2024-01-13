import {QueryClient, useQuery} from "@tanstack/react-query";

import React from "react";
import {Time} from "../../utils";
import {useKoreQueryContext} from "../../providers";

interface Options {
  queryKey: Array<string>;
  queryFunc: Awaited<Promise<any>>;
  queryContext: React.Context<QueryClient | undefined>;
  queryOptions: Object;
}

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
      try {
        const {data} = await queryFunc();
        return data;
      } catch (err) {
        console.log(err);
        throw err;
      }
    },
    context: queryContext,
    refetchInterval: refetchInterval,
  });
}

// function useKoreQueryRequest({
//   axiosOptions,
//   options,
// }: {
//   axiosOptions: Object;
//   options: Options;
// }) {
//   return {
//     use: (options: Options, req: Promise<any>) => {
//       return useQuery({
//         queryKey: options.queryKey,
//         queryFn: async () => {
//           try {
//             const {data} = await req;
//             return data;
//           } catch (err) {
//             console.log(err);
//             throw err;
//           }
//         },
//         context: options.queryContext,
//       });
//     },
//   };
// }
export {useKoreQuery, useKoreQueryAutoRefetch};
