import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Art from "./art/Art";
import Cover from "./cover/Cover";
import Footer from "./footer/Footer";

const DEFAULT_PAGE_QUERY = gql`
            query DefautQuery {
                    default {
                    covertext
                    footertext
                    footerpic {
                        url
                    }
                    coverpic {
                        url
                    }
                }
            }`;

function Default() {

    const { data, loading, error } = useQuery(DEFAULT_PAGE_QUERY);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;

    const _data = data.default;


    return (
        <div className="page">
            <Cover coverText={_data.covertext} coverPic={_data.coverpic.url} />
            <Art />
            <Footer footerText={_data.footertext} footerPic={_data.footerpic.url} />
        </div>
    )
}

export default Default;