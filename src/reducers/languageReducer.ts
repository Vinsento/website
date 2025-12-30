import type { TState, TAction} from "../Types/Types"
import { RUSSIAN, UKRAINIAN, ENGLISH } from "../Services/Constants"

export function languageReducer(state: TState<string>, action: TAction) {
  switch (action.type) {
    case ENGLISH:
      localStorage.setItem('lang', 'en')
      return { value: 'en' }
    case RUSSIAN:
      localStorage.setItem('lang', 'ru')
      return { value: 'ru' }
    case UKRAINIAN:
      localStorage.setItem('lang', 'uk')
      return{ value: 'uk' }
    default:
      return state
  }
}