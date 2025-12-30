import { ENGLISH } from "../Services/Constants"
import { isWindow } from "../Utilities/Window"
import { languageReducer } from "../reducers/languageReducer"
import { createStore } from "./store"

const storedLang =
  localStorage.getItem('lang') ??
  (isWindow ? window.navigator.language.slice(0, 2) : ENGLISH)

const initialState = {
  value: storedLang
}

export const languageStore = createStore(languageReducer, initialState)