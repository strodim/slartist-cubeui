import { useContext } from "react";
import DeviceContext from "../../context/DeviceContext";

function Cover() {

    const { device } = useContext(DeviceContext);
    let height = undefined;

    switch (device) {
        case 'big':
            height = '500px';
            break;
        case 'medium':
            height = '400px';
            break;
        case 'small':
            height = '300px';
            break;
    }

    const style = {
        height
    }

    return (
        <div className="cover" style={style}>

        </div>
    );
}

export default Cover;