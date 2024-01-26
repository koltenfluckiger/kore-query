import { KoreQueryContext } from "../../providers";
import { QueryClient } from "@tanstack/react-query";
import React from "react";
import type { UseMutationResult } from "@tanstack/react-query";
/**
 * Interface for options used in useKoreQueryMutation hook.
 * @typedef {Object} Options
 * @property {() => Promise<any>} [mutationFn] - Optional mutation function to be executed.
 * @property {React.Context<QueryClient | undefined>} queryContext - React context providing QueryClient.
 */
/**
 * Custom hook for handling mutations with React Query.
 *
 * @param {Object} params - Parameters for the hook.
 * @param {typeof KoreQueryContext | undefined} params.queryContext - Context providing QueryClient, defaults to useKoreQueryContext.
 * @param {() => Promise<any>} params.mutationFn - Mutation function to be executed.
 * @returns {UseMutationResult} - The result of the useMutation hook from React Query.
 */
declare function useKoreQueryMutation({ queryContext, mutationFn, }: {
    queryContext: typeof KoreQueryContext | undefined;
    mutationFn: Awaited<Promise<any>>;
}): UseMutationResult;
/**
 * Custom hook for creating a mutation request with React Query.
 *
 * @param {Object} params - Parameters for the hook.
 * @param {React.Context<QueryClient | undefined>} params.queryContext - Context providing QueryClient, defaults to useKoreQueryContext.
 * @returns {UseMutationResult} - The result of the useMutation hook configured for the request.
 */
declare function useKoreQueryMutationRequest({ queryContext, }: {
    queryContext: React.Context<QueryClient | undefined>;
}): UseMutationResult<any, unknown, any, unknown>;
export { useKoreQueryMutation, useKoreQueryMutationRequest };
