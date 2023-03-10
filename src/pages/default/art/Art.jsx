import Box from "./box/Box";
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Footer from "./box/Footer";

const ALL_ARTS_QUERY = gql`
  query AllArtsQuery {
    allArts(first: 50) {
        id
        title
        price
        size
        color
        background
        gradient
        pic {
          url
        }
    }
  }`;

function Art() {

  const { data, loading, error } = useQuery(ALL_ARTS_QUERY);

  if (loading) return <p></p>;
  if (error) return <p></p>;

  return (
    <div className="art-list">
      {data.allArts.map(art => (
        <Box key={art.id} item={art} />
      ))}
    </div>

  );
}

export default Art;