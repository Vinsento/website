import { useTranslation } from 'react-i18next';
import { ROUTES } from '../../config/Routes';
import { NavButton } from '../NavButton';
import styles from './Navbar.module.css';
import '../../Styles/Container.css';
import { INavbarProps } from './Navbar.props';

export const Navbar = ({ dispatch, getState }: INavbarProps) => {
  const { t } = useTranslation();
  const { list, item, anchor, wrapper, content } = styles;

  return (
    <div className={wrapper}>
      <div className={`${content} container`}>
        <ul className={list}>
          <li className={item}>
            <NavButton to={ROUTES.about} className={anchor}>
              {t('[btn-name] About')}
            </NavButton>
          </li>
          <li className={item}>
            <NavButton to={ROUTES.skills} className={anchor}>
              {t('[btn-name] Skills')}
            </NavButton>
          </li>
          <li className={item}>
            <NavButton to={ROUTES.contact} className={anchor}>
              {t('[btn-name] Contact')}
            </NavButton>
          </li>
        </ul>
        <label>
          {t('[option-name] Language')}
          <select
            name='language'
            onChange={(e) => dispatch({ type: e.target.value })}
            value={getState().value}
          >
            <option value='en'>En</option>
            <option value='uk'>Ua</option>
            <option value='ru'>Ru</option>
          </select>
        </label>
      </div>
    </div>
  );
};
