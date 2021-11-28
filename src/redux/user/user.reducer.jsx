import { UserActionType } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  isAdmin: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionType.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case UserActionType.IS_USER_ADMIN:
      return {
        ...state,
        isAdmin: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
