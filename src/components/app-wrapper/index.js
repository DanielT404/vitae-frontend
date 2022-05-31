import { h } from 'preact';
import { Router } from 'preact-router';
import { useContext, useState } from 'preact/hooks';
import { useSelector } from 'react-redux';

import View from 'routes/view';
import Theme from 'utils/contexts/Theme';

import Header from 'components/header';
import YoutubeEmbed from 'components/youtube-embed';
import Footer from 'components/footer';

import style from './style.css';

function AppWrapper() {
  const { theme } = useContext(Theme);
  const YOUTUBE_VIDEO_IDENTIFIER = 'dQw4w9WgXcQ';
  const [loading, setIsLoading] = useState(true);
  let isViewFrameActive = useSelector((state) => state.frame.value);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  return (
    <div id="app" class={theme == 'dark' ? style.darkBg : style.lightBg}>
      <div
        class={`${style.loaderDivHidden} ${(loading && style.loaderDivActive) || ''
          }`}
      >
        <span class={style.loader} />
      </div>
      {!loading && <Header />}
      {isViewFrameActive && !loading ? (
        <Router>
          <View path="/" />
          <View path="/desktop" page="desktop" />
          <View path="/about-me" page="aboutMe" />
          <View path="/projects" page="projects" />
          <View path="/resume" page="resume" />
          <View path="/contact" page="contact" />
        </Router>
      ) : (
        !isViewFrameActive && (
          <YoutubeEmbed embedId={YOUTUBE_VIDEO_IDENTIFIER} />
        )
      )}
      {!loading && <Footer />}
    </div>
  );
}

export default AppWrapper;
