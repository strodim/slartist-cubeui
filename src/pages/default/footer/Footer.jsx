import DeviceContext from "../../../context/DeviceContext";
import { useContext } from "react";

function Footer({ footerText, footerPic }) {

    const { device } = useContext(DeviceContext);
    let boxHeight = 150;
    let textFontSize = 25;
    let textLetterSpacing = 3;


    switch (device) {
        case 'medium':
            boxHeight *= 0.8;
            textFontSize = 20;
            textLetterSpacing = 2;
            break;
        case 'small':
            boxHeight *= 0.5;
            textFontSize = 12;
            textLetterSpacing = 1;
            break;
    }

    const boxStyle = {
        height: `${boxHeight}px`,
        backgroundImage: `url(${footerPic})`
    }

    const textStyle = {
        fontSize: `${textFontSize}px`,
        letterSpacing: `${textLetterSpacing}px`
    }

    return (
        <div className="footer" style={boxStyle}>
            <div className="footer-text" style={textStyle}>
                {footerText}
            </div>
        </div>
    );
}

export default Footer;