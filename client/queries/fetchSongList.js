import gql from 'graphql-tag';

const FetchSongList = gql`
  query Songs {
    songs {
      id
      title
    }
  }
`;

export default FetchSongList;
