import { BurgerMenuProps } from './BurgerMenu.props';
import styles from './BurgerMenu.module.css';

export const BurgerMenu = ({ setIsOpen }: BurgerMenuProps) => {
  const { body, burgerLine, isShown } = styles;

  return (
    <div className={`${body} ${isShown}`} onClick={setIsOpen}>
      <span className={burgerLine} />
      <span className={burgerLine} />
      <span className={burgerLine} />
    </div>
  );
};
