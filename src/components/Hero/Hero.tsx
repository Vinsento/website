import { useTranslation } from 'react-i18next';
import Me from '../../assets/images/me.webp';
import MeSmall from '../../assets/images/me-small.webp';
import styles from './Hero.module.css';
import '../../Styles/Container.css';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../config/Routes';

export const Hero = () => {
  const { t } = useTranslation();
  const { wrapper, main, greetings, description, avatar } =
    styles;

  return (
    <div className={wrapper}>
      <div className={`${main} container`}>
        <div className={`${avatar} ${styles['my-small-avatar']}`}>
          <img src={MeSmall} alt='me' />
        </div>
        <div className={`${avatar} ${styles['my-avatar']}`}>
          <img src={Me} alt='me'/>
        </div>
        <div className={greetings}>{t('Greetings')}</div>
        <div className={description}>{t('Hero-description')}</div>
        <div className={styles.actions}>
          <NavLink className={styles.primaryAction} to={ROUTES.projects}>
            {t('[action] Projects')}
          </NavLink>
          <NavLink className={styles.secondaryAction} to={ROUTES.contact}>
            {t('[action] Contact')}
          </NavLink>
        </div>
      </div>
    </div>
  );
};
