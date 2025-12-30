import { themeReducer } from "../reducers/themeReducer";
import { createStore } from "./store";

const storedTheme = localStorage.getItem('theme');

const initialState = {
  value: storedTheme ?? 'dark',
};

export const themeStore = createStore(themeReducer, initialState);
