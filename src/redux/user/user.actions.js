import { UserActionType } from "./user.types";

export const setCurrentUser = (user) => ({
  type: UserActionType.SET_CURRENT_USER,
  payload: user,
});

export const setIsAdmin = (admin) => ({
  type: UserActionType.IS_USER_ADMIN,
  payload: admin,
});
