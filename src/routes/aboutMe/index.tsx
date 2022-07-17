import { h } from 'preact';
import { RootState } from 'components/store';
import { useSelector } from 'react-redux';

import { Link } from 'preact-router';

import WindowFrame from 'components/file/window';
import Highlight from 'components/highlight';

import { Player } from '@lottiefiles/react-lottie-player';
import style from './style.css';

const AboutMe = () => {
  const isViewFileMode = useSelector((state: RootState) => state.file.viewFileMode);
  return (
    <div class={style.aboutMeWrapper}>
      <div class={style.text}>
        {isViewFileMode && <WindowFrame />}
        <p>
          <Highlight source="Enthusiast, self-taught 24 year old programmer from Bucharest, Romania." />
          <br />
          <Highlight source="Specialized in web development, keen on backend dev." />
          <br />
          <Highlight source="Wordpress is " />
          <a
            href="https://w3techs.com/technologies/details/cm-wordpress"
            rel="noopener"
            target="_blank"
            class={style.link}
          >
            <Highlight source="still used by 42.9% of all the websites available on the Internet" />
          </a> <Highlight source="and" /> <a href="https://wpscan.com/wordpresses" rel="noopener" target="_blank" class={style.link}><Highlight source="I don't like it" /></a>.
          <br />
          <Highlight source="CSS is easy until it isn't." />
          <br />
          <Highlight source="Data structures and algorithms are my love-hate relationship; out of
        frustration comes greater progress!" />
          <br />
          <Highlight source="Always ready for new challenges!" />  <br />
          <Highlight source="Let's do it!" />
        </p>
        <div class={style.ctaSection}>
          <Link href="/contact" class={`${style.ctaBtn} ${style.btnLightGreen}`}>
            <Highlight source="Let's get in touch!" />
          </Link>
          <Link href="/projects" class={`${style.ctaBtn} ${style.btnCyan}`}>
            <Highlight source="Jump to projects" />
          </Link>
        </div>
      </div>
      <div class={style.aboutMeAnimationWrapper}>
        <Player src='https://assets6.lottiefiles.com/packages/lf20_pmgmuthj.json' className={style.aboutMeAnimation} loop autoplay />
      </div>
    </div>
  );
};

export default AboutMe;
