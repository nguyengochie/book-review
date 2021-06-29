import React, { useReducer } from "react";
import { INITIAL_STATE } from "./constants";
import { onClose, alertAction } from "./dispatchers";
import Reducer from "./reducer";

export const MainCtx = React.createContext(INITIAL_STATE);

export default function MainProvider({ children }: any) {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  const setters = {
    onClose: () => onClose(dispatch),
    alertAction: (message: any) => alertAction(dispatch, message),
  };

  return <MainCtx.Provider value={{ ...state, ...setters }}>{children}</MainCtx.Provider>;
}
