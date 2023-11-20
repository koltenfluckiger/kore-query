import { QueryClient } from "@tanstack/react-query";
declare function useKoreQuery({ queryClient, queryKey, queryFunc, queryOptions, }: {
    queryClient: QueryClient | undefined;
    queryKey: Array<string>;
    queryFunc: Awaited<Promise<any>>;
    queryOptions: Object;
}): import("@tanstack/react-query/build/legacy/types").UseQueryResult<any, Error>;
declare function useKoreQueryAutoRefetch({ refetchInterval, queryClient, queryKey, queryFunc, }: {
    refetchInterval: number | undefined;
    queryClient: QueryClient | undefined;
    queryKey: Array<string>;
    queryFunc: Awaited<Promise<any>>;
}): import("@tanstack/react-query/build/legacy/types").UseQueryResult<any, Error>;
export { useKoreQuery, useKoreQueryAutoRefetch };
