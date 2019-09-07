import gql from 'graphql-tag';

const DeleteSong = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;

export default DeleteSong;
