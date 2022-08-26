import { types } from ".";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        login: true,
        user: action.payload.user,
      };
      break;
    case types.logout:
      return {
        login: false,
      };
      break;
    default:
      break;
  }
};
