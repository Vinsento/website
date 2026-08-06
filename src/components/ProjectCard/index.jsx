import { useTranslation } from "react-i18next";
import "./ProjectCard.css";
import { NavButton } from "../NavButton";

export const ProjectCard = ({ logo, stack, links, external, decription, linkName = "" }) => {
  const { t } = useTranslation();

  return (
    <div className="project-card">
      <div className="project-image">
        <img src={logo} alt="project logo" />
      </div>
      <div className="project-info">
        <div className="project-description">{t(decription)}</div>
        <div className="project-stack">
          <span>Stack</span> - {stack}
        </div>
        {links && external ? (
          <div className="project-links">
            {
              links.appStore && <a
                href={links.appStore}
                className="project-store"
                target="_blank"
                rel="noopener noreferrer"
              >
                App Store
              </a>
            }
            {
              links.googlePlay && <a
                href={links.googlePlay}
                className="project-store"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Play
              </a>
            }
            {
              links.web && <a
                href={links.web}
                className="project-store"
                target="_blank"
                rel="noopener noreferrer"
              >
                {linkName}
              </a>
            }
          </div>
        ) : (
          <NavButton to={links.route} className="project-link">
            {links.name}
          </NavButton>
        )}
      </div>
    </div>
  );
};
