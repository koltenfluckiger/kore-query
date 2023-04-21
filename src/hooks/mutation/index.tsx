import { QueryClient, useMutation } from "@tanstack/react-query";

import React from "react";

function useReactQueryMutation({
  queryContext,
  mutationFn,
}: {
  queryContext: React.Context<QueryClient | undefined>;
  mutationFn: Awaited<Promise<any>>;
}) {
  return useMutation(mutationFn, { context: queryContext });
}
export default useReactQueryMutation;
