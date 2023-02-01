import { useContext } from "react";
import DeviceContext from "../../../../context/DeviceContext";

function Footer({ size, price }) {

    const { device } = useContext(DeviceContext);
    let priceFontSize = undefined;
    let minHeight = undefined;

    switch (device) {
        case 'big':
            priceFontSize = 35;
            minHeight = 150;
            break;
        case 'medium':
            priceFontSize = 22;
            minHeight = 130;
            break;
        case 'small':
            priceFontSize = 15;
            minHeight = 80;
    }

    const priceStyle = {

        fontSize: `${priceFontSize}px`
    }

    const footerStyle = {
        minHeight
    }

    return (
        <div className="art-box-footer" style={footerStyle}>

            {price && <div className="art-box-footer-price" style={priceStyle}>
                {price}$
            </div>
            }
        </div >
    );
}

export default Footer;