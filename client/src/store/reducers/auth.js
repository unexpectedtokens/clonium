import { updateObject } from "../utility";

const initialState = {
  auth: false
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return updateObject(state, { auth: true });
    case "LOG_OUT":
      return updateObject(state, { auth: false });
    default:
      return state;
  }
};
