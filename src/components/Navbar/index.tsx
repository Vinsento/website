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
  const [selectIsOpen, setSelectIsOpen] = useState(false);

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
    language,
    select,
    option,
    options
  } = styles;

  const { pathname } = useLocation();

  const handleMobileClose = () => {
    setIsOpen(false);
  };

  const handleMobileToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelectToggle = () => {
    setSelectIsOpen((prev) => !prev)
  }

  const handleLanguageChange = (language: 'en' | 'uk' | 'ru') => {
    dispatch({ type: language });
    setSelectIsOpen(false);
  }

  function capitalizeFirstLetter(str: string) : string{
    return str[0].toUpperCase() + str.slice(1)
  }

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
        <div className={styles['language-box']}>
          <p className={language}>
            {t('[option-name] Language')}
          </p>
          <div className={select}>
            <button
              type="button"
              className={styles['default-option']}
              onClick={handleSelectToggle}
              aria-expanded={selectIsOpen}
              aria-haspopup="listbox"
            >
              {getState().value === 'uk' ? 'Ua' : capitalizeFirstLetter(getState().value)}
            </button>
            {selectIsOpen && <div className={options} role="listbox">
              <button type="button" role="option" aria-selected={getState().value === 'en'} className={option} onClick={() => handleLanguageChange('en')}>En</button>
              <button type="button" role="option" aria-selected={getState().value === 'uk'} className={option} onClick={() => handleLanguageChange('uk')}>Ua</button>
              <button type="button" role="option" aria-selected={getState().value === 'ru'} className={option} onClick={() => handleLanguageChange('ru')}>Ru</button>
            </div>}
          </div>
        </div>
      </div>
    </div>
  );
};
