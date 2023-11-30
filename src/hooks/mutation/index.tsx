import {KoreQueryContext, useKoreQueryClient} from "../../providers";
import {QueryClient, useMutation} from "@tanstack/react-query";

function useReactQueryMutation({
  queryClient = useKoreQueryClient(),
  mutationFn,
}: {
  queryClient: QueryClient | undefined;
  mutationFn: Awaited<Promise<any>>;
}) {
  try {
    return useMutation(mutationFn, {context: KoreQueryContext});
  } catch (err) {
    throw new Error(err);
  }
}
export default useReactQueryMutation;
