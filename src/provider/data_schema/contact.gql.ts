import { gql } from "@apollo/client";

export const CREATE_CONTACT_MESSAGE = gql`
  mutation CreateContactMessage($input: ContactMessageInput!) {
    createContactMessage(input: $input) {
      id
      name
      email
      message
    }
  }
`;
