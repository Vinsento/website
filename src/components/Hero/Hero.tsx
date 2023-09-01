import { useTranslation } from 'react-i18next';

import { Typewriters } from '../Typewriter';

import Me from '../../assets/images/me-small.webp';
import styles from './Hero.module.css';
import '../../Styles/Container.css';

export const Hero = () => {
  const { t } = useTranslation();
  const {
    wrapper,
    main,
    greetings,
    me,
    text,
    description,
    avatar,
    background,
    animation,
  } = styles;

  const strings = [
    t('Live-country'),
    t('Live-earth'),
    t('Live-galaxy'),
    t('Live-universe'),
  ];

  return (
    <div className={wrapper}>
      <div className={`${main} container`}>
        <div className={greetings}>{t('Greetings')}</div>
        <div className={me}>
          <div className={avatar}>
            <img src={Me} alt='me' />
          </div>
          <div className={text}>
            <h1>{t('Live')}</h1>
            <Typewriters strings={strings} className={animation} />
          </div>
        </div>
        <div className={description}>{t('Hero-description')}</div>
      </div>
    </div>
  );
};
