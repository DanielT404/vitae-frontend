import { h } from 'preact';
import Highlight from 'components/highlight';

import style from './style.css';

function Projects() {
  return (
    <div class={style.grid}>
      <div class={style.card}>
        <h1 class={style.cardHeader}>
          <Highlight source="Web scraper" />
        </h1>
        <h2 class={style.cardSubHeader}>
          <Highlight source="js (puppeteer / xlsx / cross-fetch)" />
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
            <li><Highlight source="gather missing data - products' current prices and images." /></li>
            <li>
              <Highlight source="download the products' images and upload on own host to be further
              used (to not rely on external source hosting availability)"/>
            </li>
            <li><Highlight source="parse the data to obtain information" /></li>
            <li><Highlight source="model the data" /></li>
          </ol>
        </p>
        <div
          class={style.cardExternalLink}
          onClick={() =>
            window.open('https://github.com/DanielT404/scraper-rm/', '_blank')
          }
        >
          <img src="/assets/GitHub-Mark-Light-32px.png" />
          <span class={style.ctaText}><Highlight source="Check out github repo" /></span>
        </div>
      </div>
      <div class={style.card}>
        <h1 class={style.cardHeader}><Highlight source="Binary to decimal" /></h1>
        <h2 class={style.cardSubHeader}><Highlight source="react.js" /></h2>
        <p class={style.cardDescription}>
          <Highlight source="Small, intuitive react app to convert binary numbers into decimal
          numbers. Had fun building it" />
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
          <span class={style.ctaText}><Highlight source="Check out github repo" /></span>
        </div>
      </div>
      <div class={style.card}>
        <h1 class={style.cardHeader}><Highlight source="FE personal space!" /></h1>
        <h2 class={style.cardSubHeader}><Highlight source="preact / @reduxjs/toolkit / docker" /></h2>
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
          <span class={style.ctaText}><Highlight source="Check out github repo" /></span>
        </div>
      </div>
      <div class={style.card}>
        <h1 class={style.cardHeader}><Highlight source="BE personal space!" /></h1>
        <h2 class={style.cardSubHeader}><Highlight source="node.js (express framework / AWS S3 / AWS SES / helmet / morgan) / docker" /></h2>
        <p class={style.cardDescription}>
          <Highlight source="The unseen working behind this awesome personal space!" />
        </p>
        <div class={style.cardExternalLink} onClick={() =>
          window.open('https://github.com/DanielT404/vitae-backend/', '_blank')
        }>
          <img src="/assets/GitHub-Mark-Light-32px.png" />
          <span class={style.ctaText}><Highlight source="Check out github repo" /></span>
        </div>
      </div>
    </div>
  );
}

export default Projects;
