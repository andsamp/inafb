import {combineReducers} from "@reduxjs/toolkit";
import {themeReducer} from "./theme-reducer";
import {MENU_KEY, THEME_KEY} from "../constants";
import {menuReducer} from "./menu-reducer";

export const combinedReducers = combineReducers({
  [THEME_KEY]: themeReducer,
  [MENU_KEY]: menuReducer,
})
