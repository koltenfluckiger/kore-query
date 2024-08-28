function wrapInSuspense(promise: Promise<any>) {
  let status: string = "pending";
  let response: Object;

  const Suspender: Object = promise.then(
    (res) => {
      status = "success";
      response = res;
    },
    (err) => {
      status = "error";
      response = err;
    }
  );

  const Handler: any = {
    pending: () => {
      throw Suspender;
    },
    error: () => {
      throw response;
    },
    default: () => response,
  };

  const read = () => {
    return Handler[status] ? Handler[status]() : Handler.default();
  };

  return {read};
}

export default wrapInSuspense;
