import { MainTabs } from "../../Component/constants";
import { ACTIONS } from "./actions";

export const onClose = (dispatch: any) => {
  dispatch({ type: ACTIONS.CLOSE });
};

export const alertAction = (dispatch: any, message: any) => {
  dispatch({ type: ACTIONS.ALERT_ACTION, message });
};

export const setCurrentTab = (dispatch: any, currentTab: MainTabs) => {
  dispatch({ type: ACTIONS.SET_CURRENT_TAB, currentTab });
};
