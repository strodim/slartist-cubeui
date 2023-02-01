import { useContext } from "react";
import DeviceContext from "../../../context/DeviceContext";

function Cover({ coverText, coverPic }) {

    const { device } = useContext(DeviceContext);
    let height = undefined;
    let backgroundPosition = undefined;

    switch (device) {
        case 'big':
            height = '500px';
            backgroundPosition = 'right 20% bottom 65%'
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

    console.log(coverPic);

    const style = {
        height,
        backgroundPosition,
        backgroundImage: `url(${coverPic})`
    }

    return (
        <div className="cover" style={style}>
            <div className="cover-text">
                {coverText}
            </div>
        </div>
    );
}

export default Cover;