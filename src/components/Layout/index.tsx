import { languageStore } from '../../Store/languageStore';
import { Footer } from '../Footer';
import { Navbar } from '../Navbar';
import { LayoutbarProps } from './Layout.props';
import styles from './Layout.module.css';

export const Layout = ({ children }: LayoutbarProps) => {
  const { dispatch, getState } = languageStore;
  const { wrapper } = styles;

  return (
    <div className={wrapper}>
      <Navbar dispatch={dispatch} getState={getState} />
      {children}
      <Footer />
    </div>
  );
};
