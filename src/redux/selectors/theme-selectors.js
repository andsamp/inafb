import {THEME_KEY} from "../constants";

const themeSelector = state => state[THEME_KEY];

export const darkModeSelector = state => themeSelector(state).darkMode;
