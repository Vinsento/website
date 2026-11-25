import styles from './MobileCloseButton.module.css';
import { MobileCloseButtonProps } from './MobileCloseButton.props';

export const MobileCloseButton = ({ handleClick }: MobileCloseButtonProps) => (
  <button
    type="button"
    className={styles.close}
    onClick={handleClick}
    aria-label="Close navigation"
  />
);
