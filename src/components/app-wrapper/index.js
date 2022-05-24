import { h } from 'preact'
import { Router } from 'preact-router'
import { useContext } from 'preact/hooks'
import { useSelector } from 'react-redux'

import View from '../../routes/view'
import Theme from '../../utils/contexts/Theme'

import Header from '../header'
import YoutubeEmbed from '../youtube-embed'
import Footer from '../footer'

import style from './style'

function AppWrapper() {
    const { theme } = useContext(Theme)
    const YOUTUBE_VIDEO_IDENTIFIER = 'dQw4w9WgXcQ'
    let isViewFrameActive = useSelector((state) => state.frame.value)
    return (
        <div id="app" class={theme == 'dark' ? style.darkBg : style.lightBg}>
            <Header />
            {isViewFrameActive ? (
                <Router>
                    <View path="/" page="aboutMe" />
                    <View path="/desktop" page="desktop" />
                    <View path="/about-me" page="aboutMe" />
                    <View path="/projects" page="projects" />
                    <View path="/resume" page="resume" />
                    <View path="/contact" page="contact" />
                </Router>
            ) : (
                <YoutubeEmbed embedId={YOUTUBE_VIDEO_IDENTIFIER} />
            )}
            <Footer />
        </div>
    )
}

export default AppWrapper
