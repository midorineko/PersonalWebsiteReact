/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserLeds = /* GraphQL */ `
  query GetUserLeds($email: String) {
    getUserLeds(email: $email) {
      email
    }
  }
`;
export const getUserThings = /* GraphQL */ `
  query GetUserThings($id: ID!) {
    getUserThings(id: $id) {
      email
      id
      createdAt
      updatedAt
    }
  }
`;
export const listUserThings = /* GraphQL */ `
  query ListUserThings(
    $filter: ModelUserThingsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserThings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        email
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
