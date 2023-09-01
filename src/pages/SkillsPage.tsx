import { useTranslation } from 'react-i18next';

export const SkillsPage = () => {
  const { t } = useTranslation();
  return <div>{t('Skills page')}</div>;
};
