import {QueryClient, useQuery} from "@tanstack/react-query";
import {TYPE, Time} from "../../utils";

import {useKoreQueryClient} from "../../providers";

function useKoreQuery({
  queryClient = useKoreQueryClient(),
  queryKey,
  queryFunc,
  queryOptions,
}: {
  queryClient: QueryClient | undefined;
  queryKey: Array<string>;
  queryFunc: Awaited<Promise<any>>;
  queryOptions: Object;
}) {
  return useQuery(
    {
      // @ts-ignore
      queryKey: queryKey,
      queryFn: async () => {
        const {data} = await queryFunc();
        return data;
      },
      ...queryOptions,
    },
    queryClient
  );
}

function useKoreQueryAutoRefetch({
  refetchInterval = Time.convert({
    to: TYPE.SECONDS,
    hours: 1,
    minutes: 0,
    seconds: 0,
    days: 0,
  }),
  queryClient = useKoreQueryClient(),
  queryKey,
  queryFunc,
}: {
  refetchInterval: number | undefined;
  queryClient: QueryClient | undefined;
  queryKey: Array<string>;
  queryFunc: Awaited<Promise<any>>;
}) {
  return useQuery(
    {
      // @ts-ignore
      queryKey: queryKey,
      queryFn: async () => {
        const {data} = await queryFunc();
        return data;
      },
      refetchInterval: refetchInterval,
    },
    queryClient
  );
}
export {useKoreQuery, useKoreQueryAutoRefetch};
