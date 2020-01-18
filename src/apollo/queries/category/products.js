
import gql from "graphql-tag";

const CATEGORY_PRODUCTS_QUERY = gql`
  query Category($id: ID!) {
    category(id: $id) {
      _id
      name
      products {
        _id
        name
        description
        price
        image {
            url
        }
      }
    }
  }
`;

export default CATEGORY_PRODUCTS_QUERY