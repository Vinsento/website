import { TAction, TState } from "../../Types/Types";

export interface INavbarProps {
  dispatch: ({type}:TAction) => void,
  getState: () => TState<string>
}