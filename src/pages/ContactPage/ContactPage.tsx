import { useTranslation } from "react-i18next";
import styles from "./ContactPage.module.css";
import { BreakLine } from "../../components/BreakLine";
import { ImEnvelop, ImPhone, ImLinkedin, ImGithub } from "react-icons/im";

const contacts = [
  {
    fieldName: "Email",
    contact: "hummanist@gmail.com",
    icon: <ImEnvelop />,
  },
  {
    fieldName: "Phone",
    contact: "+380937815008",
    icon: <ImPhone />,
  },
  {
    link: "https://www.linkedin.com/in/vitaliy-ksenz-346988186/",
    label: "LinkedIn",
    icon: <ImLinkedin />,
  },
  {
    link: "https://github.com/Vinsento",
    label: "GitHub",
    icon: <ImGithub />,
  },
];

export const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <div className="container">
        {contacts.map((c, i) => {
          if (c.link) {
            return (
              <div className={styles.link} key={i}>
                {c.icon}
                <a href={c.link} target="_blank" rel="noopener noreferrer">
                  {c.label}
                </a>
                <BreakLine />
              </div>
            );
          }
          return (
            <div key={i}>
              <div className={styles.head}>
                {c.icon}
                <h3 className={styles.heading}>
                  {c.fieldName && t(c.fieldName)}
                </h3>
              </div>
              {c.contact && <p className={styles.text}>{c.contact}</p>}
              <BreakLine />
            </div>
          );
        })}
      </div>
    </div>
  );
};
