import { ReactNode } from "react";

export interface NavButtonProps{
  to: string,
  children: ReactNode,
  handleClick?: () => void;
  className: string
}