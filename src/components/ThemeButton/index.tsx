import { ThemeButtonProps } from './ThemeButton.props';
import { ImSun, ImBrightnessContrast } from 'react-icons/im';
import styles from './ThemeButton.module.css';
import { themeStore } from '../../Store/themeStore';

export const ThemeButton = ({ theme }: ThemeButtonProps) => {
  const { dispatch } = themeStore;
  const handleClick = () => {
    dispatch(theme === 'light' ? { type: 'dark' } : { type: 'light' });
  };

  return (
    <button className={styles.themeBtn} onClick={handleClick}>
      {theme === 'light' ? <ImBrightnessContrast /> : <ImSun />}
    </button>
  );
};
