import { configureStore } from '@reduxjs/toolkit';
import {combinedReducers} from "./reducers/combine-reducers";
import {MENU_KEY, THEME_KEY} from "./constants";

export const store = configureStore({
  reducer: combinedReducers,
  devTools: true,
  preloadedState: {
    [THEME_KEY]: { darkMode: false },
    [MENU_KEY]: { isMenuOpen: false },
  },
});
