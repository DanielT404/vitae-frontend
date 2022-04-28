function Icon(props) {
    const { onClick, onMouseEnter } = props

    return (
        <span
            class={`material-icons ${props.class}`}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
        >
            {props.type}
        </span>
    )
}

export default Icon
