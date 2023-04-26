import React, { createContext, useContext, useState } from "react";

import Korios from "../../korios";

const KoriosContext = createContext(null);

function createKoriosClient(options: Object) {
  Korios.create(options);
  return Korios._getInstance();
}

function KoriosProvider({
  children,
  options = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    withCreditionals: true,
  },
}: {
  children: JSX.Element;
  options?: Object;
}): React.Context<typeof KoriosContext> | React.ReactElement<any, any> {
  const korios = createKoriosClient(options);
  const [koriosClient, setKoriosClient] = useState(korios);

  return (
    <KoriosContext.Provider value={koriosClient}>
      {children}
    </KoriosContext.Provider>
  );
}

const useKorios = () => {
  return useContext(KoriosContext);
};

export { KoriosProvider, useKorios };
