import {MENU_KEY} from "../constants";

const menuSelector = state => state[MENU_KEY];

export const isMenuOpenSelector = state => menuSelector(state).isMenuOpen;
