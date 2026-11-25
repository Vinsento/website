import { BurgerMenuProps } from './BurgerMenu.props';
import styles from './BurgerMenu.module.css';

export const BurgerMenu = ({ setIsOpen }: BurgerMenuProps) => {
  const { body, burgerLine, isShown } = styles;

  return (
    <button
      type="button"
      className={`${body} ${isShown}`}
      onClick={setIsOpen}
      aria-label="Open navigation"
    >
      <span className={burgerLine} />
      <span className={burgerLine} />
      <span className={burgerLine} />
    </button>
  );
};
