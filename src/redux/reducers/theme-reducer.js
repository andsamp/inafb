import {TOGGLE_DARK_MODE} from "../constants";

export const themeReducer = (state = {}, action) => {

  switch(action.type) {
    case TOGGLE_DARK_MODE:
      return {
        ...state,
        darkMode: !state.darkMode,
      }
    default:
      return state;
  }

}
