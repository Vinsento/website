import type { Treducer, TState, TAction, TCallbackFunc } from "../Types/Types"

export function createStore(reducer: Treducer<string>, initialState: TState<string>) {
  let state = initialState
  let callbacks: TCallbackFunc[] = []

  const getState = () => state

  const dispatch = (action: TAction) => {
    state = reducer(state, action)
    callbacks.forEach(callback => callback())
  }

  const subscribe = (callback: TCallbackFunc) => {
    callbacks.push(callback)
    return () => callbacks.filter(cb => cb !== callback)
  } 

  return {getState, dispatch, subscribe}
}