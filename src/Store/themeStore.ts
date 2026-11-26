import { themeReducer } from "../reducers/themeReducer";
import { createStore } from "./store";

const storedTheme = localStorage.getItem('theme');

const initialState = {
  value: storedTheme ?? 'light',
};

export const themeStore = createStore(themeReducer, initialState);
