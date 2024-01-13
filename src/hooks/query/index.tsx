import {QueryClient, useQuery} from "@tanstack/react-query";

import React from "react";
import {Time} from "../../utils";
import {useKoreQueryContext} from "../../providers";

/**
 * Options for useKoreQuery hook.
 * @typedef {Object} Options
 * @property {Array<string>} queryKey - Unique identifier for the query.
 * @property {() => Promise<any>} queryFunc - Function to fetch the data.
 * @property {React.Context<QueryClient | undefined>} queryContext - React context providing QueryClient.
 * @property {Object} queryOptions - Additional options for the query.
 */

/**
 * Custom hook for simplified data fetching using React Query.
 *
 * @param {Object} params - Parameters for the hook.
 * @param {React.Context<QueryClient | undefined>} [params.queryContext=useKoreQueryContext()] - Context providing QueryClient.
 * @param {Array<string>} params.queryKey - Unique key for the query.
 * @param {() => Promise<any>} params.queryFunc - Function to execute for data fetching.
 * @param {Object} [params.queryOptions] - Additional options for the query.
 * @returns {Object} - The result of the useQuery hook from React Query.
 */
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

/**
 * Custom hook for automatically refetching queries at a specified interval.
 *
 * @param {Object} params - Parameters for the hook.
 * @param {number} [params.refetchInterval=Time.convert(...)] - Interval for auto refetching in milliseconds.
 * @param {...otherParams} - Other parameters passed to useKoreQuery.
 * @returns {Object} - The result of the useQuery hook with auto refetching configured.
 */
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
export {useKoreQuery, useKoreQueryAutoRefetch};
