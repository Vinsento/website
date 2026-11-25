import "./App.css";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { ContactPage } from "./pages/ContactPage/ContactPage";
import { AboutPage } from "./pages/AboutPage/AboutPage";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./config/Routes";
import { ProjectsPage } from "./pages/ProjectsPage/ProjectsPage";
import { languageStore } from "./Store/languageStore";
import { themeStore } from "./Store/themeStore";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { SnakeGamePage } from "./pages/SnakeGamePage/SnakeGamePage";

function App() {
  const { getState, subscribe } = languageStore;
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(getState().value);
    const unsubscribeLanguage = subscribe(() =>
      i18n.changeLanguage(getState().value)
    );
    const updateTheme = () =>
      document.documentElement.setAttribute(
        "data-aria",
        themeStore.getState().value
      );

    updateTheme();
    const unsubscribeTheme = themeStore.subscribe(updateTheme);

    return () => {
      unsubscribeLanguage();
      unsubscribeTheme();
    };
  }, [getState, i18n, subscribe]);

  return (
    <>
      <Layout>
        <Routes>
          <Route path={ROUTES.home} element={<HomePage />} />
          <Route path={ROUTES.about} element={<AboutPage />} />
          <Route path={ROUTES.contact} element={<ContactPage />} />
          <Route path={ROUTES.projects} element={<ProjectsPage />} />
          <Route path={ROUTES.snake} element={<SnakeGamePage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
