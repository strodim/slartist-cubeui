import { useContext } from "react";
import DeviceContext from "../../../context/DeviceContext";

function Footer({ desc, price, frameColor }) {

    const { device } = useContext(DeviceContext);
    let priceFontSize = undefined;
    let minHeight = undefined;

    switch (device) {
        case 'big':
            priceFontSize = 35;
            minHeight = 60;
            break;
        case 'medium':
            priceFontSize = 22;
            minHeight = 50;
            break;
        case 'small':
            priceFontSize = 15;
            minHeight = 30;
    }

    const priceStyle = {
        fontSize: `${priceFontSize}px`
    }



    return (
        <div className="art-box-footer" style={{ minHeight: minHeight }}>
         
            {price && <div className="art-box-footer-price" style={priceStyle}>
                {price}$
            </div>
            }
        </div >
    );
}

export default Footer;