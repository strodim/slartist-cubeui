import { useContext } from "react";
import DeviceContext from "../../../context/DeviceContext";

function Cover({ coverText, coverPic }) {

    const { device } = useContext(DeviceContext);
    let boxHeight = 500;
    let textFontSize = 35;
    let backgroundPosition = 'right 20% bottom 65%';
    let textLetterSpacing = 3;


    switch (device) {
        case 'medium':
            boxHeight *= 0.8;
            textFontSize = 30;
            textLetterSpacing = 2;
            break;
        case 'small':
            boxHeight *= 0.5;
            textFontSize = 15;
            textLetterSpacing = 1;
            break;
    }

    const boxStyle = {
        height: `${boxHeight}px`,
        backgroundPosition,
        backgroundImage: `url(${coverPic})`
    }

    const textStyle = {
        fontSize: `${textFontSize}px`,
        letterSpacing: `${textLetterSpacing}px`
    }

    return (
        <div className="cover" style={boxStyle}>
            <div className="cover-text" style={textStyle}>
                {coverText}
            </div>
        </div>
    );
}

export default Cover;