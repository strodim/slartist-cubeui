import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";


function Box({ item }) {

    return (
        <div className="art-card" style={item.gradient}>
            <Header title={item.title} price={item.price} frameColor={item.frameColor} background={item.background} titleWidth={item.imgWidth} />
            <Main item={item} />
            <Footer desc={item.desc} frameColor={item.frameColor} background={item.background} />
        </div>
    );
}

export default Box;