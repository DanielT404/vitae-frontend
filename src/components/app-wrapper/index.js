import { Fragment, h } from 'preact';
import { Router } from 'preact-router';
import { useContext, useState } from 'preact/hooks';
import { useSelector } from 'react-redux';

import View from 'routes/view';

import Header from 'components/header';
import YoutubeEmbed from 'components/youtube-embed';
import Footer from 'components/footer';

import { YOUTUBE_VIDEO_IDENTIFIER } from 'utils/global/constants';
import Theme from 'utils/contexts/Theme';

import style from './style.css';

function AppWrapper() {
  const isViewFrameActive = useSelector((state) => state.frame.value);
  const is404Page = useSelector((state) => state.frame.is404Page);
  const [loading, setIsLoading] = useState(true);

  const { theme } = useContext(Theme);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  return (
    <div id="app" class={theme == 'dark' ? style.darkBg : style.lightBg}>
      <div class={`${style.loaderDivHidden} ${(loading && style.loaderDivActive)}`}>
        <span class={style.loader} />
      </div>
      {!loading && <Header />}
      {isViewFrameActive && !loading ? (
        <Router>
          <View path="/" page="aboutMe" />
          <View path="/desktop" page="desktop" />
          <View path="/about-me" page="aboutMe" />
          <View path="/projects" page="projects" />
          <View path="/resume" page="resume" />
          <View path="/contact" page="contact" />
          <View default />
        </Router>
      ) : (
        !isViewFrameActive && (
          <Fragment>
            <YoutubeEmbed embedId={YOUTUBE_VIDEO_IDENTIFIER} />
            <Footer absolutePositionBottom />
          </Fragment>
        )
      )}
      {!loading && !is404Page && isViewFrameActive && <Footer />}
    </div>
  );
}

export default AppWrapper;
