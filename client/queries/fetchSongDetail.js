import gql from 'graphql-tag';

const FetchSongDetail = gql`
  query Song($id: ID!) {
    song(id: $id) {
      title
      id
      lyrics {
        id
        content
        likes
      }
    }
  }
`;

export default FetchSongDetail;
