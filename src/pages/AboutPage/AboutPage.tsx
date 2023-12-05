import { useTranslation } from 'react-i18next';
import styles from './AboutPage.module.css';

export const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <div className='container'>
        <h3 className={styles.heading}>{t('About-exp')}</h3>
        <p>{t('About-exp-details')}</p>
        <h3 className={styles.heading}>{t('About-me')}</h3>
        <p>{t('About-me-details')}</p>
      </div>
    </div>
  );
};
