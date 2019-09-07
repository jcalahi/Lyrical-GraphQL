import gql from 'graphql-tag';

const LikeLyric = gql`
  mutation LikeLyric($id: ID!) {
    likeLyric(id: $id) {
      id
      likes
    }
  }
`;

export default LikeLyric;
