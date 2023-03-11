/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const createLEDHub = /* GraphQL */ `
  mutation CreateLEDHub($input: CreateLEDHubInput!) {
    createLEDHub(input: $input) {
      email
    }
  }
`;
export const updateLEDHub = /* GraphQL */ `
  mutation UpdateLEDHub($input: UpdateLEDHubInput!) {
    updateLEDHub(input: $input) {
      email
    }
  }
`;
export const deleteLEDHub = /* GraphQL */ `
  mutation DeleteLEDHub($input: DeleteLEDHubInput!) {
    deleteLEDHub(input: $input) {
      email
    }
  }
`;
