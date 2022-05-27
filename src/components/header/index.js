import { h } from 'preact';
import { Link } from 'preact-router';
import { useContext } from 'preact/hooks';

import Theme from '../../utils/contexts/Theme';

import Icon from '../material-icon';
import style from './style.css';

function Header() {
  const { theme, setTheme } = useContext(Theme);
  const toggleThemeMode = () => {
    return theme === 'dark' ? setTheme('light') : setTheme('dark');
  };

  return (
    <div class={style.container}>
      <header class={style.header}>
        <Link class={style.redCircle} href="/" />
        <Link
          class={`${style.nameBox} ${theme === 'light' ? style.light : ''}`}
          href="/"
        >
          <h1 class={style.name}>Daniel Țună</h1>
          <h5 class={style.underName}>personal space</h5>
        </Link>
      </header>
      {theme === 'dark' && (
        <div class={style.toggleTheme}>
          <Icon
            type="light_mode"
            class={style.icon}
            onClick={() => toggleThemeMode()}
          />
          <h6>toggle light mode</h6>
        </div>
      )}
      {theme === 'light' && (
        <div class={`${style.toggleTheme} ${style.textBlack}`}>
          <Icon
            type="dark_mode"
            class={`${style.icon} ${style.darkSwitchIcon}`}
            onClick={() => toggleThemeMode()}
          />
          <h6>toggle dark mode</h6>
        </div>
      )}
    </div>
  );
}

export default Header;
