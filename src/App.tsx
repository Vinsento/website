import './App.css';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { ContactPage } from './pages/ContactPage';
import { AboutPage } from './pages/AboutPage';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './config/Routes';
import { SkillsPage } from './pages/SkillsPage';
import { languageStore } from './Store/languageStore';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

function App() {
  const { dispatch, getState, subscribe } = languageStore;
  const { i18n } = useTranslation();

  subscribe(() => changeLang(getState().value));

  const changeLang = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    changeLang(getState().value);
  }, []);

  return (
    <>
      <Layout>
        <Routes>
          <Route path={ROUTES.home} element={<HomePage />} />
          <Route path={ROUTES.about} element={<AboutPage />} />
          <Route path={ROUTES.contact} element={<ContactPage />} />
          <Route path={ROUTES.skills} element={<SkillsPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
