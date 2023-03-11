/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote($filter: ModelSubscriptionNoteFilterInput) {
    onCreateNote(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote($filter: ModelSubscriptionNoteFilterInput) {
    onUpdateNote(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote($filter: ModelSubscriptionNoteFilterInput) {
    onDeleteNote(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onCreateLEDHub = /* GraphQL */ `
  subscription OnCreateLEDHub($email: String) {
    onCreateLEDHub(email: $email) {
      email
    }
  }
`;
export const onUpdateLEDHub = /* GraphQL */ `
  subscription OnUpdateLEDHub($email: String) {
    onUpdateLEDHub(email: $email) {
      email
    }
  }
`;
export const onDeleteLEDHub = /* GraphQL */ `
  subscription OnDeleteLEDHub($email: String) {
    onDeleteLEDHub(email: $email) {
      email
    }
  }
`;
