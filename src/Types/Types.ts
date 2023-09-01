export type TCallbackFunc = () => void

export type TState<T> = {
  value: T
}

export type TAction= {
  type: string,
}

export type Treducer<T> = (state: TState<T>, action: TAction) => TState<T>