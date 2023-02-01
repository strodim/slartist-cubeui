import { useContext } from "react";
import DeviceContext from "../../../context/DeviceContext";

function Header({ title }) {

    const { device } = useContext(DeviceContext);
    let fontSize = undefined;

    switch (device) {
        case 'big':
            fontSize = 35;
            break;
        case 'medium':
            fontSize = 23;
            break;
        case 'small':
            fontSize = 18;
            break;
    }

    const titleStyle = {

        fontSize: `${fontSize}px`
    }

    return (

        <div className="art-box-header" >
            <div className="art-box-header-title" style={titleStyle}>
                {title}
            </div>
        </div >

    );
}

export default Header;