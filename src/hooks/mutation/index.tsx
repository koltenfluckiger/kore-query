import {QueryClient, useMutation} from "@tanstack/react-query";

import {useKoreQueryClient} from "../../providers";

function useReactQueryMutation({
  queryClient = useKoreQueryClient(),
  mutationFn,
}: {
  queryClient: QueryClient | undefined;
  mutationFn: Awaited<Promise<any>>;
}) {
  try {
    return useMutation(mutationFn, (queryClient = queryClient));
  } catch (err) {
    throw new Error(err);
  }
}
export default useReactQueryMutation;
