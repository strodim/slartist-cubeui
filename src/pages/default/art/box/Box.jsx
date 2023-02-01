import { useContext } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import DeviceContext from "../../../../context/DeviceContext";


function Box({ item }) {

    const { device } = useContext(DeviceContext);
    let boxWdith = undefined;

    switch (device) {
        case 'big':
            boxWdith = 700;
            break;
        case 'medium':
            boxWdith = 600;
            break;
        case 'small':
            boxWdith = 330;
    }

    const style = {
        background: item.gradient,
        width: boxWdith
    }

    return (
        <div className="art-box" style={style}>

            <Main item={item} />

        </div>
    );
}

export default Box;