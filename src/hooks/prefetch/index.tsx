/**
 * Custom hook for prefetching data using Kore Query.
 *
 * This hook prefetches data using the provided query key and query function, utilizing the Kore Query client.
 *
 * @param {Object} options - The options object.
 * @param {Array<string>} options.queryKey - The key for the query.
 * @param {Promise<any>} options.queryFunc - The function that returns a promise with the query data.
 * @returns {Promise<any>} - A promise that resolves with the prefetched data.
 */

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
