import { useContext } from "react";
import DeviceContext from "../../../context/DeviceContext";

function Cover() {

    const { device } = useContext(DeviceContext);
    let height = undefined;
    let backgroundPosition = undefined;

    switch (device) {
        case 'big':
            height = '500px';
            backgroundPosition = 'right 30% bottom 55%'
            break;
        case 'medium':
            height = '400px';
            backgroundPosition = 'right 30% bottom 55%'
            break;
        case 'small':
            height = '300px';
            backgroundPosition = 'right 30% bottom 45%'
            break;
    }

    const style = {
        height,
        backgroundPosition
    }

    return (
        <div className="cover" style={style}>

        </div>
    );
}

export default Cover;