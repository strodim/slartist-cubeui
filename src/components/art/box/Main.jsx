import { useContext } from "react";
import DeviceContext from "../../../context/DeviceContext";

function Main({ item }) {

    const { device } = useContext(DeviceContext);
    let borderSize = undefined;
    let padding = undefined;

    switch (device) {
        case 'big':
            borderSize = 10;
            padding = 20;
            break;
        case 'medium':
            borderSize = 8;
            padding = 15;
            break;
        case 'small':
            borderSize = 6;
            padding = 10;
            break;
    }

    const border = `${borderSize}px ridge ${item.frameColor}`;

    const picStyle = {
        border
    };

    const boxStyle = {
        background: item.gradient,
        paddingTop: `${padding}px`,
        paddingBottom: `${padding}px`
    }

    console.log(item.gradient);

    return (
        <div className="art-box-main" style={boxStyle}>
            <img style={picStyle} className='art-box-main-pic' src={item.imgUrl} width={item.imgWidth} height={item.imgHeight} title={item.title} alt={item.title} />
        </div>
    );
}

export default Main;