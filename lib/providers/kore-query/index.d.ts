declare namespace KoreQuery {
    interface ReactQueryOptions {
        queries: Object;
    }
}
import { QueryClient } from "@tanstack/react-query";
import React from "react";
declare const KoreQueryContext: React.Context<QueryClient>;
declare function KoreQuery({ options, customOptions, queryCacheOptions, mutationCacheOptions, ...props }: {
    [x: string]: any;
    options?: {
        queries: {
            staleTime: number;
            cacheTime: number;
            suspense: boolean;
            notifyOnChangeProps: string;
            useErrorBoundary: boolean;
        };
    };
    customOptions?: {};
    queryCacheOptions?: {};
    mutationCacheOptions?: {};
}): {
    children: JSX.Element;
    options?: KoreQuery.ReactQueryOptions;
    customOptions?: Object;
    queryCacheOptions?: Object;
    mutationCacheOptions?: Object;
};
declare const useKoreQueryClient: () => QueryClient;
declare const useKoreQueryContext: () => React.Context<QueryClient>;
export { KoreQuery, KoreQueryContext, useKoreQueryClient, useKoreQueryContext };
