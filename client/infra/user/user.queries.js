import { gql } from '@apollo/client';

export const LOGGED_USER_QUERY = gql`
  query LoggedUser {
    loggedUser {
      _id
      name
      email
    }
  }
`;
