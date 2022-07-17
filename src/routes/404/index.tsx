import { h } from 'preact'
import { useContext } from 'preact/hooks';

import Footer from 'components/footer';
import Theme from 'utils/contexts/Theme';

import { Player } from '@lottiefiles/react-lottie-player';
import style from './style.css';

const Page404Component = () => {
    const { theme } = useContext(Theme);

    return (
        <div class={style.page404}>
            <div class={style.anim404Wrapper}>
                <Player src='https://assets4.lottiefiles.com/packages/lf20_q2pevjuc.json' className={style.anim404} loop autoplay />
            </div>
            <h1 class={`${style.message} ${theme === "light" ? style.darkColor_shade1 : ''}`}>
                Oops, it seems you're lost. Let me get you back on track!
                <ol class={style.routeList}>
                    <li>
                        Track 1. <a href="/" class={theme === "light" ? style.darkColor_shade2 : ''}>Visit my personal space homepage</a>
                    </li>
                    <li>
                        Track 2. <a href="/desktop" class={theme === "light" ? style.darkColor_shade2 : ''}>My virtual personal space, a.k.a the desktop. I usually gather tech-related funny memes and put some easter eggs.</a>
                    </li>
                    <li>
                        Track 3. <a href="/about-me" class={theme === "light" ? style.darkColor_shade2 : ''}> Some words about me and what I'm passionate of</a>
                    </li>
                    <li>
                        Track 4. <a href="/projects" class={theme === "light" ? style.darkColor_shade2 : ''}> My list of projects I have worked on</a>
                    </li>
                    <li>
                        Track 5. <a href="/contact" class={theme === "light" ? style.darkColor_shade2 : ''}> Get in touch with me and send a message!</a>
                    </li>
                </ol>
            </h1>
            <Footer absolutePositionBottom />
        </div>
    )
}

export default Page404Component;