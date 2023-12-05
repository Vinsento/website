import { useTranslation } from 'react-i18next';
import styles from './ProjectsPage.module.css';

export const ProjectsPage = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <div className='container'>
        <p>To be continued... (in progress)</p>
      </div>
    </div>
  );
};
