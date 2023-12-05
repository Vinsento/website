import styles from './MobileCloseButton.module.css';
import { MobileCloseButtonProps } from './MobileCloseButton.props';

export const MobileCloseButton = ({ handleClick }: MobileCloseButtonProps) => (
  <div className={styles.close} onClick={handleClick} />
);
