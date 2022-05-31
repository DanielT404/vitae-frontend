import { h, Fragment } from 'preact';
import { useSelector } from 'react-redux';

const Highlight = ({ source }) => {
    const { isActive, searchText } = useSelector((state) => state.highlight);
    if (isActive) {
        const searchedTextRegex = new RegExp(searchText, "gi")
        source = source.replace(searchedTextRegex, `<mark>${searchText}</mark>`)
    }
    return (
        <Fragment>
            <span dangerouslySetInnerHTML={{ __html: source }}></span>
        </Fragment>
    )
}

export default Highlight;