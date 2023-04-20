import { useQuery } from "@tanstack/react-query";

function useReactQuery({
    queryKey,
    queryFunc,
}: {
    queryKey: Array<string>;
    queryFunc: Awaited<Promise<any>>;
}) {
    return useQuery({
        queryKey: queryKey,
        queryFn: async () => {
            const { data } = await queryFunc();
            return data;
        },
    });
}

export default useReactQuery;