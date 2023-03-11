/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLEDHub = /* GraphQL */ `
  query GetLEDHub($email: String!) {
    getLEDHub(email: $email) {
      email
    }
  }
`;
export const listLEDHubs = /* GraphQL */ `
  query ListLEDHubs(
    $filter: TableLEDHubFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLEDHubs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        email
      }
      nextToken
    }
  }
`;
