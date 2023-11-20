import React from "react";
declare const KoriosContext: React.Context<any>;
declare function KoriosProvider({ children, options, }: {
    children: JSX.Element;
    options?: Object;
}): React.Context<typeof KoriosContext> | React.ReactElement<any, any>;
declare const useKorios: () => any;
export { KoriosProvider, useKorios };
