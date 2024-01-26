import { QueryClient } from "@tanstack/react-query";
import React from "react";
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
declare function useKoreQuery({ queryContext, queryKey, queryFunc, queryOptions, }: {
    queryContext: React.Context<QueryClient | undefined>;
    queryKey: Array<string>;
    queryFunc: Awaited<Promise<any>>;
    queryOptions: Object;
}): import("@tanstack/react-query").UseQueryResult<any, unknown>;
/**
 * Custom hook for automatically refetching queries at a specified interval.
 *
 * @param {Object} params - Parameters for the hook.
 * @param {number} [params.refetchInterval=Time.convert(...)] - Interval for auto refetching in milliseconds.
 * @param {...otherParams} - Other parameters passed to useKoreQuery.
 * @returns {Object} - The result of the useQuery hook with auto refetching configured.
 */
declare function useKoreQueryAutoRefetch({ refetchInterval, queryContext, queryKey, queryFunc, }: {
    refetchInterval: number | undefined;
    queryContext: React.Context<QueryClient | undefined>;
    queryKey: Array<string>;
    queryFunc: Awaited<Promise<any>>;
}): import("@tanstack/react-query").UseQueryResult<any, unknown>;
export { useKoreQuery, useKoreQueryAutoRefetch };
