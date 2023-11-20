import { QueryClient } from "@tanstack/react-query";
declare function useReactQueryMutation({ queryClient, mutationFn, }: {
    queryClient: QueryClient | undefined;
    mutationFn: Awaited<Promise<any>>;
}): import("@tanstack/react-query/build/legacy/types").UseMutationResult<unknown, Error, void, unknown>;
export default useReactQueryMutation;
