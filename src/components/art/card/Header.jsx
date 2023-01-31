import { useWindowDimensions } from '../../../hooks/useWindowDimensions';

const baseFontSize = 20;

function Header({ title, price, frameColor, background, titleWidth }) {

    const { width } = useWindowDimensions();
    let fontSize = width / 100;

    if (fontSize < baseFontSize)
        fontSize = baseFontSize;

    const style = {
        width: `${titleWidth - 20}px`,
        backgroundColor: background,
        border: `3px solid ${frameColor}`,
        fontSize: `${fontSize}px`
    }

    return (
        <div className="art-card-header">
            <div className="art-card-title" style={style}>
                {title}
            </div>
        </div >
    );
}

export default Header;