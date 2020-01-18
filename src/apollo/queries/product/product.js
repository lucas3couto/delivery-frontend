
import gql from "graphql-tag";

const PRODUCT_PRODUCTS_QUERY = gql`
  query Category($id: ID!) {
    product(id: $id) {
        _id
        name
        description
        price
        image {
            url
        }
    }
  }
`;

export default PRODUCT_PRODUCTS_QUERY