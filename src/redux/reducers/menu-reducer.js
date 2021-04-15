import {TOGGLE_MENU} from "../constants";

export const menuReducer = (state = {}, action) => {
  switch(action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen,
      }
    default:
      return state;
  }
}
