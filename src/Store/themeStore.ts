import { themeReducer } from "../reducers/themeReducer";
import { createStore } from "./store";

const initialState = { value: "dark" };
export const themeStore = createStore(themeReducer, initialState);
