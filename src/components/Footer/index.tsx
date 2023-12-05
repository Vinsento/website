import { useState } from 'react';
import { themeStore } from '../../Store/themeStore';
import { ThemeButton } from '../ThemeButton';
import styles from './Footer.module.css';

export const Footer = () => {
  const { wrapper } = styles;
  const { getState, subscribe } = themeStore;

  const [theme, setTheme] = useState(getState().value);

  subscribe(() => setTheme(getState().value));

  return (
    <div className={wrapper}>
      <div className={`${styles.content} container`}>
        <p>All right not reserved</p>
        <ThemeButton theme={theme} />
      </div>
    </div>
  );
};
