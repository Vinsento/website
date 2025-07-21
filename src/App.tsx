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

  subscribe(() => changeLang(getState().value));

  const changeLang = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    changeLang(getState().value);

    document.documentElement.setAttribute(
      "data-aria",
      themeStore.getState().value
    );

    themeStore.subscribe(() =>
      document.documentElement.setAttribute(
        "data-aria",
        themeStore.getState().value
      )
    );
  }, [themeStore.getState().value]);

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
