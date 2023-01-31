import { useContext } from "react";
import DeviceContext from "../../context/DeviceContext";
import { useAPI } from "../../hooks/useAPI";
import ArtCard from "./card/Card";

function ArtList() {

    const { data, loading, error } = useAPI('http://localhost:1337/api/pictures?populate=deep');
    const { device } = useContext(DeviceContext);

    if (loading) {
        return <div></div>;
    }

    const baseUrl = 'http://localhost:1337';

    const items = [];

    data.data.forEach((itm, idx) => {

        const id = idx;
        const title = itm.attributes.Title.toUpperCase();
        const desc = itm.attributes.Description;
        const sale = itm.attributes.Sale;
        const price = sale === 'for-sale' ? itm.attributes.Price : undefined;
        const gradient = { background: itm.attributes.Gradient || 'black' };
        const frameColor = itm.attributes.FrameColor;
        const background = itm.attributes.Background;
        let image = undefined;
        let imgWidth = undefined;
        let imgHeight = undefined;

        switch (device) {
            case 'big':
                image = itm.attributes.Img.data.attributes.formats.medium;
                imgWidth = image.width;
                imgHeight = image.height;
                break;
            case 'medium':
                image = itm.attributes.Img.data.attributes.formats.small;
                imgWidth = image.width;
                imgHeight = image.height;
                break;
            case 'small':
                image = itm.attributes.Img.data.attributes.formats.small;
                imgWidth = image.width / 2;
                imgHeight = image.height / 2;
                break;
        }

        const imgUrl = baseUrl + image.url;


        items.push({
            id,
            title,
            desc,
            sale,
            price,
            gradient,
            frameColor,
            background,
            imgUrl,
            imgWidth,
            imgHeight
        });
    })

    return (
        <div className="art-list">

            {items.map(item => (
                <ArtCard key={item.id} item={item} />
            ))
            }
        </div>
    );
}

export default ArtList;