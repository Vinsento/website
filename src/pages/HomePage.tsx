import { useTranslation } from 'react-i18next';

import { Hero } from '../components/Hero/Hero';

export const HomePage = () => {
  const { t } = useTranslation();
  return <Hero />;
};
