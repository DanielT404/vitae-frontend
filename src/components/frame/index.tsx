import { h } from 'preact';
import { useContext } from 'preact/hooks';

import HeaderFrame from 'components/frame/header';
import BodyFrame from 'components/frame/body';

import Theme from 'utils/contexts/Theme';

import style from './style.css';

function Frame({ path, page } : { path: string, page: string }) {
  const { theme } = useContext(Theme);

  return (
    <div class={`${style.frameContainer} ${theme == 'light' ? style.lightBg : style.darkBg}`}>
      <HeaderFrame path={path} />
      <BodyFrame page={page} />
    </div>
  );
}

export default Frame;
