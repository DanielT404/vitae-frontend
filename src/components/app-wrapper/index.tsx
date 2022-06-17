//@ts-ignore
import { Fragment, h } from 'preact';
import { Router } from 'preact-router';
import { useContext, useState } from 'preact/hooks';
import { useSelector } from 'react-redux';
import { RootState } from 'components/store';

import View from 'routes/view';

import Header from 'components/header';
import YoutubeEmbed from 'components/youtube-embed';
import Footer from 'components/footer';

import { YOUTUBE_VIDEO_IDENTIFIER } from 'utils/global/constants';
import Theme from 'utils/contexts/Theme';

import style from './style.css';

function AppWrapper() {
  const isViewFrameActive = useSelector((state: RootState) => state.frame.value)
  const is404Page = useSelector((state: RootState) => state.frame.is404Page);
  const [loading, setIsLoading] = useState(true);

  const { theme } = useContext(Theme);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  return (
    <div data-cy-theme={theme} id="app" class={theme == 'dark' ? style.darkBgApp : style.lightBgApp}>
      <div data-cy-loading={loading ? "true" : "false"} class={`${style.loaderDivHidden} ${(loading && style.loaderDivActive)}`}>
        <span class={style.loader} />
      </div>
      <Header/>
      {isViewFrameActive && (
        <Router>
          <View path="/" page="aboutMe" />
          <View path="/desktop" page="desktop" />
          <View path="/about-me" page="aboutMe" />
          <View path="/projects" page="projects" />
          <View path="/resume" page="resume" />
          <View path="/contact" page="contact" />
          <View default />
        </Router>
      )}
      {!isViewFrameActive && (
          <Fragment>
            <YoutubeEmbed embedId={YOUTUBE_VIDEO_IDENTIFIER} />
            <Footer absolutePositionBottom={true} />
          </Fragment>
      )}
      {!is404Page && isViewFrameActive && <Footer />}
    </div>
  );
}

export default AppWrapper;
