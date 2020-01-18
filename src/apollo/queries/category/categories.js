
import gql from "graphql-tag";

const CATEGORY_CATEGORIES_QUERY = gql`
    query{
      categories {
      _id
      name,
      image{
        url
      }
    }
    }

`;

export default CATEGORY_CATEGORIES_QUERY