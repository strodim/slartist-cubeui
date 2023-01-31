import DeviceContext from "../../context/DeviceContext";
import { useContext } from "react";

function Header() {

    const { device } = useContext(DeviceContext);
    let fontSize = undefined;
    let headerHeight = undefined;

    switch (device) {
        case 'big':
            fontSize = '50px';
            headerHeight = '100px';
            break;
        case 'medium':
            fontSize = '40px';
            headerHeight = '80px';
            break;
        case 'small':
            fontSize = '30px';
            headerHeight = '50px';
            break;
    }

    const style = {
        fontSize,
        height: headerHeight
    }

    return (
        <div className="header">
            <div className="header-title" style={style}>
                Salvina Lak
            </div>
        </div>
    );
}

export default Header;