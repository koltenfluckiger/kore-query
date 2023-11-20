import React, {ReactElement, createContext, useReducer} from "react";

import {queueReducer} from "./reducers";

const QueueContext = createContext(null);

function QueueProvider({
  children,
}: {
  children: JSX.Element;
}): React.Context<typeof QueueProvider> | ReactElement<any, any> {
  const [state, dispatch] = useReducer(queueReducer, []);
  const add = (item: any) => {
    dispatch({type: "add", item: item});
  };

  const remove = (item: any) => {
    dispatch({type: "remove", item: item});
  };

  const clear = () => {
    dispatch({type: "clear"});
  };

  const first = () => {
    dispatch({type: "first"});
  };

  const last = () => {
    dispatch({type: "last"});
  };

  const empty = () => {
    dispatch({type: "empty"});
  };

  const values = {
    add: add,
    remove: remove,
    clear: clear,
    first: first,
    last: last,
    queue: state,
    empty: empty,
  };

  return (
    <QueueContext.Provider value={values}>{children}</QueueContext.Provider>
  );
}

const useQueue = () => React.useContext(QueueContext);
export {QueueProvider, useQueue};
