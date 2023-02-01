import { useContext } from "react";
import DeviceContext from "../../../../context/DeviceContext";

function Main({ item }) {

    const { device } = useContext(DeviceContext);
    let borderSize = undefined;
    let padding = undefined;
    let picUrl = item.pic.url;

    switch (device) {
        case 'big':
            borderSize = 10;
            padding = 20;
            picUrl += '?h=600';
            break;
        case 'medium':
            borderSize = 8;
            padding = 15;
            picUrl += '?h=400';
            break;
        case 'small':
            borderSize = 6;
            padding = 10;
            picUrl += '?h=230';
            break;
    }

    const border = `${borderSize}px ridge ${item.color}`;

    const picStyle = {
        border
    };

    const boxStyle = {

        paddingTop: `${padding}px`,
        paddingBottom: `${padding}px`,
        background: item.gradient
    }

    return (
        <div className="art-box-main" style={boxStyle}>
            <img style={picStyle} className='art-box-main-pic' src={picUrl} title={item.title} alt={item.title} />
        </div>
    );
}

export default Main;