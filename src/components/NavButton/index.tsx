import { NavLink } from 'react-router-dom';
import { NavButtonProps } from './NavButton.props';
import './NavButton.css';

export const NavButton = ({
  to,
  children,
  className,
  handleClick,
}: NavButtonProps) => {
  return (
    <NavLink to={to} className={className} onClick={handleClick}>
      {children}
    </NavLink>
  );
};
