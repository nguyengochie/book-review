import React, { useReducer } from "react";
import { MainTabs } from "../../Component/constants";
import { INITIAL_STATE } from "./constants";
import { onClose, alertAction, setCurrentTab } from "./dispatchers";
import Reducer from "./reducer";

export const MainCtx = React.createContext(INITIAL_STATE);

export default function MainProvider({ children }: any) {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  const setters = {
    onClose: () => onClose(dispatch),
    alertAction: (message: any) => alertAction(dispatch, message),
    setCurrentTab: (currentTab: MainTabs) => setCurrentTab(dispatch, currentTab),
  };

  return <MainCtx.Provider value={{ ...state, ...setters }}>{children}</MainCtx.Provider>;
}
