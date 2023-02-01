import { useContext } from "react";
import DeviceContext from "../../context/DeviceContext";
import { useAPI } from "../../hooks/useAPI";
import Box from "./box/Box";
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

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
  }
`;

function ArtList() {

    const { data, loading, error } = useQuery(ALL_ARTS_QUERY);
    const { device } = useContext(DeviceContext);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;

    return (
        <div className="art-list">
            {data.allArts.map(art => (
                <Box key={art.id} item={art} />
            ))}
        </div>

    );
}

export default ArtList;