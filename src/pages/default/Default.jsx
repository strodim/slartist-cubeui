import Art from "./art/Art";
import Cover from "./cover/Cover";
import Footer from "./footer/Footer";


function Default() {

    return (
        <div className="page">
            <Cover />
            <Art />
            <Footer />
        </div>
    )
}

export default Default;