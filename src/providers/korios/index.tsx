import React, {createContext, useContext, useState} from "react";

import Korio from "../../korio";

const KoriosContext = createContext(null);

function createKoriosClient(options: Object) {
  Korio.create(options);
  return Korio._getInstance();
}

function KoriosProvider({
  children,
  defaultOptions = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    withCredentials: true,
  },
  options = {},
}: {
  children: JSX.Element;
  defaultOptions?: Object;
  options?: Object;
}): React.Context<typeof KoriosContext> | React.ReactElement<any, any> {
  const opts = {...defaultOptions, ...options};
  const KoriosClient = createKoriosClient(opts);
  const [Korios] = useState(() => KoriosClient);

  return (
    <KoriosContext.Provider value={Korios}>{children}</KoriosContext.Provider>
  );
}

const useKorios = () => {
  return useContext(KoriosContext);
};

export {KoriosProvider, useKorios};
