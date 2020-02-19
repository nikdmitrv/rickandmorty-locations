import { gql } from "apollo-boost";

const GET_LOCATIONS = gql`
  query locations($page: Int!) {
    locations(page: $page) {
      info {
        pages
      }
      results {
        name
        id
        type
        residents {
          id
          name
          image
        }
      }
    }
  }
`;

const GET_LOCATION_INFO = gql`
  query location($id: ID) {
    location(id: $id) {
      name
      type
    }
  }
`;

const GET_LOCATION_RESIDENTS = gql`
  query location($id: ID) {
    location(id: $id) {
      name
      residents {
        id
        name
        species
        image
      }
    }
  }
`;

export { GET_LOCATIONS, GET_LOCATION_INFO, GET_LOCATION_RESIDENTS };
