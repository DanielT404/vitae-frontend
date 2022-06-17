import { h } from 'preact';
import style from './style.css';

const YoutubeEmbed = ({ embedId } : { embedId: string }) => {
  return (
    <div class={style.videoResponsive}>
      <iframe
        src={`https://www.youtube.com/embed/${embedId}?autoplay=1`}
        title="YouTube video player"
        frameBorder={0}
        autoPlay
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </div>
  );
};

export default YoutubeEmbed;
