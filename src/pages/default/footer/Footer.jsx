import DeviceContext from "../../../context/DeviceContext";
import { useContext } from "react";

function Footer({ footerText, footerPic }) {

    const { device } = useContext(DeviceContext);
    let height = undefined;

    switch (device) {
        case 'big':
            height = '150px';
            break;
        case 'medium':
            height = '120px';
            break;
        case 'small':
            height = '100px';
            break;
    }

    const style = {
        height,
        backgroundImage: `url(${footerPic})`
    }

    return (
        <div className="footer" style={style}>
            <div className="footer-text">
                {footerText}
            </div>
        </div>
    );
}

export default Footer;