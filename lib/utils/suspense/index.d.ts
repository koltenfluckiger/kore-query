declare function wrapInSuspense(promise: Promise<any>): {
    read: () => any;
};
export default wrapInSuspense;
