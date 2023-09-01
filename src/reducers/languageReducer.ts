import type { TState, TAction} from "../Types/Types"
import { RUSSIAN, UKRAINIAN, ENGLISH } from "../Services/Constants"

export function languageReducer(state: TState<string>, action: TAction) {
  switch (action.type) {
    case ENGLISH:
      return { value: 'en' }
    case RUSSIAN:
      return { value: 'ru' }
    case UKRAINIAN:
      return{ value: 'uk' }
    default:
      return state
  }
}