import { h } from 'preact';

function Icon(props : any) {
  const { handleClick, handleOnMouseEnter } = props;

  return (
    <span id={props.id !== undefined ? props.id : ''} class={`material-icons ${props.class !== undefined && props.class}`} onClick={handleClick} onMouseEnter={handleOnMouseEnter}>
      {props.type}
    </span>
  );
}

export default Icon;
