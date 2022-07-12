import { gql } from "@apollo/client";

export const LOAD_USERS = gql`
  query {
    getAllUsers {
      id
      fullName
      phoneNumber
      status
      country
      createdAt
    }
  }
`;
