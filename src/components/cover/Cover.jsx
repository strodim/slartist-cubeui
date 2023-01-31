import { useContext } from "react";
import DeviceContext from "../../context/DeviceContext";

function Cover() {

    const { device } = useContext(DeviceContext);
    let coverHeight = undefined;

    switch (device) {
        case 'big':
            coverHeight = '500px';
            break;
        case 'medium':
            coverHeight = '400px';
            break;
        case 'small':
            coverHeight = '300px';
            break;
    }

    const style = {
        height: coverHeight
    }

    return (
        <div className="cover" style={style}>

        </div>
    );
}

export default Cover;