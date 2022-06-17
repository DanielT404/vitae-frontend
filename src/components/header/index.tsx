import { h } from 'preact';
import { Link } from 'preact-router';
import { useContext } from 'preact/hooks';

import Theme from 'utils/contexts/Theme';

import Icon from 'components/material-icon';
import style from './style.css';

function Header() {
  const { theme, setTheme } = useContext(Theme);
  const toggleThemeMode = () => {
    return theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  const oppositeOfCurrentTheme  = () => {
    return theme === "dark" ? "light" : "dark"
  }

  return (
    <div class={style.headerContainer}>
      <header class={style.header}>
        <Link class={style.redCircle} href="/" />
        <Link class={`${style.nameBox} ${theme === "light" && style.light}`} href="/">
          <h1 class={style.name}>Daniel Țună</h1>
          <h5 class={style.underName}>personal space</h5>
        </Link>
      </header>
      <div class={`${style.toggleTheme} ${theme == "light" && style.textBlack}`}>
        <Icon type={`${oppositeOfCurrentTheme()}_mode`}
          class={`${style.defaultSwitchIcon} ${theme === "light" && style.darkSwitchIcon}`}
          handleClick={toggleThemeMode}
        />
        <h6>toggle {oppositeOfCurrentTheme()} mode</h6>
      </div>
    </div>
  );
}

export default Header;
