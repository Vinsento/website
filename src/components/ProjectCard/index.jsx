import { useTranslation } from "react-i18next";
import "./ProjectCard.css";

export const ProjectCard = ({ logo, stack, links }) => {
  const { t } = useTranslation();

  return (
    <div className="project-card">
      <div className="project-image">
        <a
          href={links.web}
          className="project-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} alt="project logo" />
        </a>
      </div>
      <div className="project-info">
        <div className="project-description">{t("niagara-mobile")}</div>
        <div className="project-stack">
          <span>Stack</span> - {stack}
        </div>
        {links ? (
          <div className="project-links">
            <a
              href={links.appStore}
              className="project-store"
              target="_blank"
              rel="noopener noreferrer"
            >
              App Store
            </a>
            <a
              href={links.googlePlay}
              className="project-store"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Play
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
};
