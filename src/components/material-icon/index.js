import { h } from 'preact';

function Icon(props) {
  const { onClick, onMouseEnter } = props;

  return (
    <span class={`
      material-icons 
      ${props.class !== undefined && props.class}
      `}
      onClick={onClick}
      onMouseEnter={onMouseEnter}>
      {props.type}
    </span>
  );
}

export default Icon;
