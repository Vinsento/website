import { themeReducer } from "../reducers/themeReducer"
import { createStore } from "./store"

const initialState = {value: 'light'}
export const themeStore = createStore(themeReducer, initialState)
