import { useTranslation } from 'react-i18next';

export const ContactPage = () => {
  const { t } = useTranslation();
  return <div>{t('Contact page')}</div>;
};
