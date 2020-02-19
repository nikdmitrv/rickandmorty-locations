import { gql } from "apollo-boost";

const GET_RESIDENT = gql`
  query character($id: ID) {
    character(id: $id) {
      image
      name
      status
      species
      location {
        id
        name
      }
      origin {
        name
      }
    }
  }
`;

export { GET_RESIDENT };
