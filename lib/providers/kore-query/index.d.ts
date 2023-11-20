declare namespace KoreQuery {
    interface ReactQueryOptions {
        queries: Object;
    }
}
import { QueryClient } from "@tanstack/react-query";
import React, { ReactElement } from "react";
declare const KoreQueryContext: React.Context<QueryClient>;
declare const KoreQuery: ({ children, options, customOptions, queryCacheOptions, mutationCacheOptions, }: {
    children: JSX.Element;
    options?: KoreQuery.ReactQueryOptions;
    customOptions?: Object;
    queryCacheOptions?: Object;
    mutationCacheOptions?: Object;
}) => React.Context<QueryClient> | ReactElement<any, any>;
declare const useKoreQueryClient: () => QueryClient;
declare const useKoreQueryContext: () => React.Context<QueryClient>;
export { KoreQuery, KoreQueryContext, useKoreQueryClient, useKoreQueryContext };
