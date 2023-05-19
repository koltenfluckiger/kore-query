import { QueryClient, useMutation } from "@tanstack/react-query";

import React from "react";

function useReactQueryMutation({
  queryContext,
  mutationFn,
}: {
  queryContext: React.Context<QueryClient | undefined>;
  mutationFn: Awaited<Promise<any>>;
}) {
  try {
    return useMutation(mutationFn, { context: queryContext });
  } catch (err) {
    throw new Error(err);
  }
}
export default useReactQueryMutation;
