import { h } from 'preact'
import styles from './style.css'

const YoutubeEmbed = (props) => {
    return (
        <div class={styles.videoResponsive}>
            <iframe
                width="900"
                height="600"
                src={`https://www.youtube.com/embed/${props.embedId}?autoplay=1`}
                title="YouTube video player"
                frameborder="0"
                autoplay
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
        </div>
    )
}

export default YoutubeEmbed
