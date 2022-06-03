import { h } from 'preact';
import { useSelector } from 'react-redux';

import WindowFrame from 'components/file/window';
import Highlight from 'components/highlight';

import Theme from 'utils/contexts/Theme';

import style from './style.css';
import { useContext } from 'preact/hooks';

function Projects() {
  const isViewFileMode = useSelector((state) => state.file.viewFileMode);
  const { theme } = useContext(Theme);

  return (
    <div class={`${style.projectsWrapper} ${theme === "light" && style.darkColor}`}>
      {isViewFileMode && <WindowFrame />}
      <div class={style.grid}>
        <div class={`${style.card} ${theme === "light" && style.whiteBg}`}>
          <h1 class={style.cardHeader}>
            <Highlight source="Web scraper" />
          </h1>
          <h2 class={style.cardSubHeader}>
            <Highlight source="node.js (puppeteer / xlsx / cross-fetch)" />
          </h2>
          <p class={style.cardDescription}>
            <span class={style.bold}>
              <Highlight source="Client" />
            </span>
            <Highlight source=": small business in thermal and sanitary installations" />
            <br />
            <span class={style.bold}>
              <Highlight source="Current purpose" />
            </span>
            <Highlight source=": scrape products from an external source that have been given in an Excel file" />
            <br />
            <span class={style.bold}>
              <Highlight source="Objectives" />
            </span>:
            <ol>
              <li><Highlight source="1. gather missing data - products' current prices and images." /></li>
              <li>
                <Highlight source="2. download the products' images and upload on own host to be further
              used (to not rely on external source hosting availability)"/>
              </li>
              <li><Highlight source="3. parse the data to obtain information" /></li>
              <li><Highlight source="4. model the data" /></li>
            </ol>
          </p>
          <div
            class={style.cardExternalLink}
            onClick={() =>
              window.open('https://github.com/DanielT404/scraper-rm/', '_blank')
            }
          >
            <img src="/assets/GitHub-Mark-Light-32px.png" />
            <span class={`${style.ctaText} ${theme === 'light' && style.whiteColor}`}><Highlight source="Check out github repo" /></span>
          </div>
        </div>
        <div class={`${style.card} ${theme === "light" && style.whiteBg}`}>
          <h1 class={style.cardHeader}><Highlight source="FE personal space!" /></h1>
          <h2 class={style.cardSubHeader}><Highlight source="preact.js / @reduxjs/toolkit / sh / docker" /></h2>
          <p class={style.cardDescription}>
            <Highlight source="Beautiful, yet complex project designed to stay with me for the future." />
            <br />
            <Highlight source="Chances are you're navigating it right now." />
            <br />
            <Highlight source="The ole' boring CV's are no longer a thing in 2022. Not in tech industry to say the least." />
            <br />
          </p>
          <div class={style.cardExternalLink} onClick={() =>
            window.open('https://github.com/DanielT404/vitae-frontend/', '_blank')
          }>
            <img src="/assets/GitHub-Mark-Light-32px.png" />
            <span class={`${style.ctaText} ${theme === 'light' && style.whiteColor}`}><Highlight source="Check out github repo" /></span>
          </div>
        </div>
        <div class={`${style.card} ${theme === "light" && style.whiteBg}`}>
          <h1 class={style.cardHeader}><Highlight source="BE personal space!" /></h1>
          <h2 class={style.cardSubHeader}><Highlight source="node.js (express framework / helmet / morgan) / docker / AWS S3 / AWS SES" /></h2>
          <p class={style.cardDescription}>
            <Highlight source="The unseen working behind this awesome personal space!" />
          </p>
          <div class={style.cardExternalLink} onClick={() =>
            window.open('https://github.com/DanielT404/vitae-backend/', '_blank')
          }>
            <img src="/assets/GitHub-Mark-Light-32px.png" />
            <span class={`${style.ctaText} ${theme === 'light' && style.whiteColor}`}><Highlight source="Check out github repo" /></span>
          </div>
        </div>
        <div class={`${style.card} ${theme === "light" && style.whiteBg}`}>
          <h1 class={style.cardHeader}><Highlight source="Ecommerce shop" /></h1>
          <h2 class={style.cardSubHeader}><Highlight source="PHP (Laravel v5.3 framework) / MySQL / Eloquent ORM" /></h2>
          <p class={style.cardDescription}>
            <Highlight source="A personal ecommerce shop project that I had built a while ago to test my PHP skills and learn Laravel and the MVC pattern along the way." />
          </p>
          <div
            class={style.cardExternalLink}
            onClick={() =>
              window.open(
                'https://github.com/DanielT404/magazin_online',
                '_blank'
              )
            }
          >
            <img src="/assets/GitHub-Mark-Light-32px.png" />
            <span class={`${style.ctaText} ${theme === 'light' && style.whiteColor}`}><Highlight source="Check out github repo" /></span>
          </div>
        </div>
        <div class={`${style.card} ${theme === "light" && style.whiteBg}`}>
          <h1 class={style.cardHeader}><Highlight source="Binary to decimal" /></h1>
          <h2 class={style.cardSubHeader}><Highlight source="react.js" /></h2>
          <p class={style.cardDescription}>
            <Highlight source="Small, intuitive react app to convert binary numbers into decimal
          numbers." />
          </p>
          <div
            class={style.cardExternalLink}
            onClick={() =>
              window.open(
                'https://github.com/DanielT404/binary-to-decimal-app/',
                '_blank'
              )
            }
          >
            <img src="/assets/GitHub-Mark-Light-32px.png" />
            <span class={`${style.ctaText} ${theme === 'light' && style.whiteColor}`}><Highlight source="Check out github repo" /></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
