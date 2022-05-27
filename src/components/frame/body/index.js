import { h } from 'preact';

import { useContext } from 'preact/hooks';
import Theme from '../../../utils/contexts/Theme';

import Desktop from '../../../routes/desktop';
import AboutMe from '../../../routes/aboutMe';
import Projects from '../../../routes/projects';
import Resume from '../../../routes/resume';
import Contact from '../../../routes/contact';
import TreeFrame from '../tree';

import style from './style.css';

function BodyFrame({ page }) {
  const { theme } = useContext(Theme);
  return (
    <div class={style.bodyFrame}>
      <TreeFrame currentNav={page} />
      {page == 'desktop' && <Desktop />}
      {page == 'aboutMe' && (
        <div
          class={`${style.innerBody} ${
            theme == 'light'
              ? style.innerBodyLightColor
              : style.innerBodyDarkColor
          }`}
        >
          {page == 'aboutMe' && <AboutMe />}
        </div>
      )}
      {page == 'projects' && (
        <div
          class={`${style.innerBody} ${style.smallerMargin} ${
            theme == 'light'
              ? style.innerBodyLightColor
              : style.innerBodyDarkColor
          }`}
        >
          <Projects />
        </div>
      )}
      {page == 'resume' && (
        <div class={style.resumeBg}>
          <Resume />
        </div>
      )}
      {page == 'contact' && (
        <div
          class={`${style.innerBody} ${style.smallerMargin} ${
            theme == 'light'
              ? style.innerBodyLightColor
              : style.innerBodyDarkColor
          }`}
        >
          <Contact />
        </div>
      )}
    </div>
  );
}

export default BodyFrame;
