import { h } from 'preact';
import { Link } from 'preact-router';

import style from './style.css';

const AboutMe = () => {
  return (
    <div class={style.text}>
      Enthusiast, self-taught 24 year old programmer from Bucharest, Romania.{' '}
      <br />
      Specialized in web development. <br />
      Data structures and algorithms are my love-hate relationship; out of
      frustration comes greater progress! <br />
      Always ready for new challenges. <br />
      Let’s do it!
      <div class={style.ctaSection}>
        <Link href="/contact" class={`${style.ctaBtn} ${style.btnLightGreen}`}>
          <span>Let's get in touch!</span>
        </Link>
        <Link href="/projects" class={`${style.ctaBtn} ${style.btnCyan}`}>
          <span>Jump to projects</span>
        </Link>
      </div>
    </div>
  );
};

export default AboutMe;
