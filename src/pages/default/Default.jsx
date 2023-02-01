import ArtList from '../../components/art/ArtList';
import Cover from '../../components/cover/Cover';
import Footer from '../../components/footer/Footer';

function Default() {

    return (
        <div className="default-page">
            <Cover />
            <ArtList />
            <Footer />
        </div>
    )
}

export default Default;