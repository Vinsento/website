import { useTranslation } from "react-i18next";
import "./ProjectCard.css";
import { NavButton } from "../NavButton";
import { ProjectCardProps } from "./ProjectCard.props";

export const ProjectCard = ({
  logo,
  stack,
  links,
  external,
  description,
  linkName = "Website",
}: ProjectCardProps) => {
  const { t } = useTranslation();

  return (
    <article className="project-card">
      <div className="project-image">
        <img src={logo} alt="" />
      </div>
      <div className="project-info">
        <div className="project-description">{t(description)}</div>
        <div className="project-stack">
          <span>Stack</span> - {stack}
        </div>
        {external ? (
          <div className="project-links">
            {links.appStore && (
              <a
                href={links.appStore}
                className="project-store"
                target="_blank"
                rel="noopener noreferrer"
              >
                App Store
              </a>
            )}
            {links.googlePlay && (
              <a
                href={links.googlePlay}
                className="project-store"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Play
              </a>
            )}
            {links.web && (
              <a
                href={links.web}
                className="project-store"
                target="_blank"
                rel="noopener noreferrer"
              >
                {linkName}
              </a>
            )}
          </div>
        ) : (
          links.route && (
            <NavButton to={links.route} className="project-link">
              {links.name}
            </NavButton>
          )
        )}
      </div>
    </article>
  );
};
