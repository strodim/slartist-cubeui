import { useContext } from "react";
import DeviceContext from "../context/DeviceContext";

function Layer({ children }) {

    const { device } = useContext(DeviceContext);
    let borderRadius = undefined;

    switch (device) {
        case 'big':
            borderRadius = '40px';
            break;
        case 'medium':
            borderRadius = '40px';
            break;
        case 'small':
            borderRadius = '30px';
            break;
    }

    const style = {
        borderRadius
    }


    return <div className="layer">{children}</div>
}

export default Layer;