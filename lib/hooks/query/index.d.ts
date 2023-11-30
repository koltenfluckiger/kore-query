import { QueryClient } from "@tanstack/react-query";
import React from "react";
declare function useKoreQuery({ queryContext, queryKey, queryFunc, queryOptions, }: {
    queryContext: React.Context<QueryClient | undefined>;
    queryKey: Array<string>;
    queryFunc: Awaited<Promise<any>>;
    queryOptions: Object;
}): import("@tanstack/react-query").UseQueryResult<any, unknown>;
declare function useKoreQueryAutoRefetch({ refetchInterval, queryContext, queryKey, queryFunc, }: {
    refetchInterval: number | undefined;
    queryContext: React.Context<QueryClient | undefined>;
    queryKey: Array<string>;
    queryFunc: Awaited<Promise<any>>;
}): import("@tanstack/react-query").UseQueryResult<any, unknown>;
export { useKoreQuery, useKoreQueryAutoRefetch };
