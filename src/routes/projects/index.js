import { h } from 'preact'
import Icon from '../../components/material-icon'
import style from './style.css'

function Projects() {
    return (
        <div class={style.grid}>
            <div class={style.card}>
                <h1 class={style.cardHeader}>Web scraper</h1>
                <h2 class={style.cardSubHeader}>
                    js (puppeteer / xlsx / cross-fetch)
                </h2>
                <p class={style.cardDescription}>
                    <span class={style.bold}>Client</span>: small business in
                    thermal and sanitary installations
                    <br />
                    <span class={style.bold}>Current purpose</span>: scrape
                    products from an external source that have been given in an
                    Excel file
                    <br />
                    <span class={style.bold}>Objectives</span>:
                    <ol>
                        <li>
                            gather missing data - products' current prices and
                            images.
                        </li>
                        <li>
                            download the products' images and upload on own host
                            to be further used (to not rely on external source
                            hosting availability)
                        </li>
                        <li>parse the data to obtain information</li>
                        <li>model the data</li>
                    </ol>
                </p>
                <div
                    class={style.cardExternalLink}
                    onClick={() =>
                        window.open(
                            'https://github.com/DanielT404/scraper-rm/',
                            '_blank'
                        )
                    }
                >
                    <img src="/assets/GitHub-Mark-Light-32px.png" />
                    <span class={style.ctaText}>Check out github repo</span>
                </div>
            </div>
            <div class={style.card}>
                <h1 class={style.cardHeader}>Binary to decimal</h1>
                <h2 class={style.cardSubHeader}>react.js</h2>
                <p class={style.cardDescription}>
                    Small, intuitive react app to convert binary numbers into
                    decimal numbers. Had fun building it.
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
                    <span class={style.ctaText}>Check out github repo</span>
                </div>
            </div>
            <div class={style.card}>
                <h1 class={style.cardHeader}>bla bla bal</h1>
                <h2 class={style.cardSubHeader}>php masterminder</h2>
                <p class={style.cardDescription}>test test</p>
                <div class={style.cardExternalLink}>
                    <img src="/assets/GitHub-Mark-Light-32px.png" />
                    <span class={style.ctaText}>Check out github repo</span>
                </div>
            </div>
        </div>
    )
}

export default Projects
