import { h } from 'preact';
import { useContext } from 'preact/hooks';

import Theme from 'utils/contexts/Theme';

import Desktop from 'routes/desktop';
import AboutMe from 'routes/aboutMe';
import Projects from 'routes/projects';
import Resume from 'routes/resume';
import Contact from 'routes/contact';
import TreeFrame from '../tree';

import style from './style.css';

function BodyFrame({ page } : { page: string}) {
  const MapPageToComponent : any = {
    'desktop': Desktop,
    'aboutMe': AboutMe,
    'projects': Projects,
    'resume': Resume,
    'contact': Contact,
  }
  const RenderPageComponent : React.FunctionComponent<any> = MapPageToComponent[page];
  const { theme } = useContext(Theme);

  return (
    <div class={style.bodyFrame}>
      <TreeFrame currentNav={page} />
      {page == "desktop" && <Desktop />}
      {page !== "desktop" && (
        <div class={`${style.innerBody} ${theme == "light" ? style.innerBodyLightColor : style.innerBodyDarkColor}`}>
          <RenderPageComponent />
        </div>
      )}
    </div>
  );
}

export default BodyFrame;
