import { ACTIONS } from "./actions";
import { INITIAL_STATE } from "./constants";

const Reducer = (state: any, action: any) => {
  const { message } = action;

  switch (action.type) {
    case ACTIONS.CLOSE:
      return {
        ...INITIAL_STATE,
      };
    case ACTIONS.ALERT_ACTION: {
      return {
        open: true,
        message,
      };
    }
    default:
      return state;
  }
};
export default Reducer;
