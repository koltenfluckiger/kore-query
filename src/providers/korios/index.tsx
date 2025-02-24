import React, {createContext, useContext, useState} from "react";

import Korios from "../../korios";

const KoriosContext = createContext(null);

function createKoriosClient(options: Object) {
  Korios.create(options);
  return Korios._getInstance();
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
  const [korios] = useState(() => KoriosClient);

  return (
    <KoriosContext.Provider value={korios}>{children}</KoriosContext.Provider>
  );
}

const useKorios = () => {
  return useContext(KoriosContext);
};

export {KoriosProvider, useKorios};
