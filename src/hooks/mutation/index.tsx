import { useMutation } from "@tanstack/react-query";

function useReactQueryMutation({
  mutationFn,
}: {
  mutationFn: Awaited<Promise<any>>;
}) {
  return useMutation({
    mutationFn: mutationFn,
  });
}
export default useReactQueryMutation;
