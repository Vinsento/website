import Logo from "../../assets/images/project-images/niagara.png";
import { useTranslation } from "react-i18next";
import { ProjectCard } from "../../components/ProjectCard";
import { BreakLine } from "../../components/BreakLine";
import styles from "./ProjectsPage.module.css";

export const ProjectsPage = () => {
  const { t } = useTranslation();

  const niagaraLinks = {
    appStore: "https://apps.apple.com/us/app/niagara-club/id6747974550",
    googlePlay:
      "https://play.google.com/store/apps/details?id=www.niagara.app.com",
    web: "https://niagara.kith.agency/#/welcome",
  };

  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={styles.projectSite}>{t("description-website")}</div>
        <BreakLine />
        <div className={styles.projectAnother}>{t("another-projects")}</div>
        <ProjectCard
          logo={Logo}
          stack="Vue.js, Quasar, Capacitor"
          links={niagaraLinks}
        />
      </div>
    </div>
  );
};
