import React, { ReactElement } from "react";
declare function QueueProvider({ children, }: {
    children: JSX.Element;
}): React.Context<typeof QueueProvider> | ReactElement<any, any>;
declare const useQueue: () => any;
export { QueueProvider, useQueue };
