import type { TState, TAction} from "../Types/Types"
import {DARK, LIGHT} from '../Services/Constants'

export function themeReducer(state: TState<string>, action: TAction) {
  switch (action.type) {
    case DARK:
      localStorage.setItem('theme', 'dark')
      return { value: 'dark' }
    case LIGHT:
      localStorage.setItem('theme', 'light')
      return { value: 'light' }
    default:
      return state
  }
}