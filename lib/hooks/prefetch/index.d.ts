declare function useKoreQueryPrefetch({ queryKey, queryFunc, }: {
    queryKey: Array<string>;
    queryFunc: Awaited<Promise<any>>;
}): Promise<void>;
export default useKoreQueryPrefetch;
