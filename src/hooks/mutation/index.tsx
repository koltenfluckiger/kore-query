import {KoreQueryContext, useKoreQueryContext} from "../../providers";
import {QueryClient, useMutation} from "@tanstack/react-query";

import React from "react";
import type {UseMutationResult} from "@tanstack/react-query";

interface Options {
  mutationFn?: Awaited<Promise<any>>;
  queryContext: React.Context<QueryClient | undefined>;
}
function useKoreQueryMutation({
  queryContext = useKoreQueryContext(),
  mutationFn,
}: {
  queryContext: typeof KoreQueryContext | undefined;
  mutationFn: Awaited<Promise<any>>;
}): UseMutationResult {
  try {
    return useMutation(mutationFn, {context: queryContext});
  } catch (err) {
    throw new Error(err);
  }
}
function useKoreQueryMutationRequest({
  queryContext = useKoreQueryContext(),
}: {
  queryContext: React.Context<QueryClient | undefined>;
}) {
  const mutation = useMutation(
    async (request: any) => {
      try {
        const {data} = await request();
        return data;
      } catch (err) {
        console.log(err);
        throw err;
      }
    },
    {
      context: queryContext,
      onSuccess: (data, variables, context) => {
        console.log(data);
        console.log(variables);
        console.log(context);
      },
    }
  );
  return mutation;
}

export {useKoreQueryMutation, useKoreQueryMutationRequest};
