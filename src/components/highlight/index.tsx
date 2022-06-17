import { h, Fragment } from 'preact';
import { useSelector } from 'react-redux';
import { RootState } from 'components/store';

interface IHighlightProps {
    source: string,
    displayType?: string
}

const Highlight: React.FC<IHighlightProps> = ({ source, displayType }) => {
    const { isActive, searchText } = useSelector((state: RootState) => state.highlight);
    if (isActive) {
        const searchedTextRegex = new RegExp(searchText, "gi")
        source = source.replace(searchedTextRegex, `<mark>${searchText}</mark>`)
    }
    return (
        <Fragment>
            <span dangerouslySetInnerHTML={{ __html: source }} style={{ display: displayType ? displayType : 'inline' }}></span>
        </Fragment>
    )
}

export default Highlight;