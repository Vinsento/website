import { ThemeButtonProps } from './ThemeButton.props';
import styles from './ThemeButton.module.css';
import { themeStore } from '../../Store/themeStore';
import { useTranslation } from 'react-i18next';

export const ThemeButton = ({ theme }: ThemeButtonProps) => {
  const { t } = useTranslation();
  const { dispatch } = themeStore;
  const handleClick = () => {
    dispatch(theme === 'light' ? { type: 'dark' } : { type: 'light' });
  };
  
  return (
    <div className={styles['theme-bar']}>
      <p className={styles['theme-status']}>{theme === 'light' ? t('theme-status-light') : t('theme-status-dark')}</p>
      <div className={`${styles['theme-switch']} ${theme === 'light' ? styles.end : styles.start}`} onClick={handleClick}>
        <div className={styles.themeBtn}>
          
        </div>
      </div>
    </div>
  );
};
