import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";


function Box({ item }) {

    const style = {
        background: item.background
    }

    return (
        <div className="art-box" style={style}>
            <Header title={item.title} />
            <Main item={item} />
            <Footer desc={item.desc} price={item.price} frameColor={item.frameColor} />
        </div>
    );
}

export default Box;