import { h } from 'preact'
import { Router } from 'preact-router'
import { useContext } from 'preact/hooks'
import { useSelector } from 'react-redux'

import Theme from '../../utils/contexts/Theme'
import View from '../../routes/view'

import Header from '../header'
import YoutubeEmbed from '../youtube-embed'
import Footer from '../footer'

import style from './style'

function AppWrapper() {
    const YOUTUBE_VIDEO_IDENTIFIER = 'dQw4w9WgXcQ'
    const theme = useContext(Theme)
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
