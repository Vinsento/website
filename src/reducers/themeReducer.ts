import type { TState, TAction} from "../Types/Types"
import {DARK, LIGHT} from '../Services/Constants'

export function themeReducer(state: TState<string>, action: TAction) {
  switch (action.type) {
    case DARK:
      return { value: 'dark' }
    case LIGHT:
      return { value: 'light' }
    default:
      return state
  }
}