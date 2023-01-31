import { useAPI } from "../../hooks/useAPI";
import ArtCard from "./card/Card";

function ArtList() {

    const { data, loading, error } = useAPI('http://localhost:1337/api/pictures?populate=deep');

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
        const imgUrl = baseUrl + itm.attributes.Img.data.attributes.formats.small.url;
        const imgWidth = itm.attributes.Img.data.attributes.formats.medium.width;
        const imgHeight = itm.attributes.Img.data.attributes.formats.medium.height;
        const opacity = '0.2';

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
            imgHeight,
            opacity
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