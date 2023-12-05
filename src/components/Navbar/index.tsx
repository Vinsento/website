import { useTranslation } from 'react-i18next';
import { ROUTES } from '../../config/Routes';
import { NavButton } from '../NavButton';
import styles from './Navbar.module.css';
import '../../Styles/Container.css';
import { INavbarProps } from './Navbar.props';
import { useLocation } from 'react-router-dom';
import { ImHome } from 'react-icons/im';
import { BurgerMenu } from '../BurgerMenu';
import { useState } from 'react';
import { MobileCloseButton } from '../MobileCloseButton';

export const Navbar = ({ dispatch, getState }: INavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const { t } = useTranslation();

  const {
    list,
    item,
    anchor,
    wrapper,
    content,
    first,
    navigation,
    mobileHeader,
    active,
  } = styles;

  const { pathname } = useLocation();

  const handleMobileClose = () => {
    setIsOpen(false);
  };

  const handleMobileToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={wrapper}>
      <div className={`${content} container`}>
        <BurgerMenu isOpen={isOpen} setIsOpen={handleMobileToggle} />
        <div className={isOpen ? `${navigation} ${active}` : navigation}>
          {isOpen && (
            <div className={mobileHeader}>
              <MobileCloseButton handleClick={handleMobileClose} />
            </div>
          )}
          <ul className={list}>
            {pathname !== '/' && (
              <li className={`${item} ${first}`}>
                <NavButton
                  to={ROUTES.home}
                  className={anchor}
                  handleClick={handleMobileClose}
                >
                  <ImHome />
                </NavButton>
              </li>
            )}
            <li className={item}>
              <NavButton
                to={ROUTES.about}
                className={anchor}
                handleClick={handleMobileClose}
              >
                {t('[btn-name] About')}
              </NavButton>
            </li>
            <li className={item}>
              <NavButton
                to={ROUTES.projects}
                className={anchor}
                handleClick={handleMobileClose}
              >
                {t('[btn-name] Projects')}
              </NavButton>
            </li>
            <li className={item}>
              <NavButton
                to={ROUTES.contact}
                className={anchor}
                handleClick={handleMobileClose}
              >
                {t('[btn-name] Contact')}
              </NavButton>
            </li>
          </ul>
        </div>
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
