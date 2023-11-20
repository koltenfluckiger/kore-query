import {useKoreQueryClient} from "../../providers";
function useKoreQueryPrefetch({
  queryKey,
  queryFunc,
}: {
  queryKey: Array<string>;
  queryFunc: Awaited<Promise<any>>;
}) {
  const queryClient = useKoreQueryClient();
  return queryClient.prefetchQuery({
    queryKey: queryKey,
    queryFn: async () => {
      const {data} = await queryFunc();
      return data;
    },
  });
}
export default useKoreQueryPrefetch;
