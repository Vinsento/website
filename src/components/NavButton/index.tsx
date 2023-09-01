import { Link } from 'react-router-dom';
import { NavButtonProps } from './NavButton.props';

export const NavButton = ({ to, children, className }: NavButtonProps) => {
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};
