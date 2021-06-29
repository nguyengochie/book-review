import { ACTIONS } from "./actions";

export const onClose = (dispatch: any) => {
  dispatch({ type: ACTIONS.CLOSE });
};

export const alertAction = (dispatch: any, message: any) => {
  dispatch({ type: ACTIONS.ALERT_ACTION, message });
};
