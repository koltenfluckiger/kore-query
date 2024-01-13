import { KoreQueryContext } from "../../providers";
import { QueryClient } from "@tanstack/react-query";
import React from "react";
import type { UseMutationResult } from "@tanstack/react-query";
declare function useKoreQueryMutation({ queryContext, mutationFn, }: {
    queryContext: typeof KoreQueryContext | undefined;
    mutationFn: Awaited<Promise<any>>;
}): UseMutationResult;
declare function useKoreQueryMutationRequest({ queryContext, }: {
    queryContext: React.Context<QueryClient | undefined>;
}): UseMutationResult<any, unknown, any, unknown>;
export { useKoreQueryMutation, useKoreQueryMutationRequest };
