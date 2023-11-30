import React from "react";
declare const KoriosContext: React.Context<any>;
declare function KoriosProvider({ children, defaultOptions, options, }: {
    children: JSX.Element;
    defaultOptions?: Object;
    options?: Object;
}): React.Context<typeof KoriosContext> | React.ReactElement<any, any>;
declare const useKorios: () => any;
export { KoriosProvider, useKorios };
