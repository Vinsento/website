import { ENGLISH } from "../Services/Constants"
import { isWindow } from "../Utilities/Window"
import { languageReducer } from "../reducers/languageReducer"
import { createStore } from "./store"

const initialState = isWindow ? {value: window.navigator.language.slice(0, 2)} : {value: ENGLISH}

export const languageStore = createStore(languageReducer, initialState)
