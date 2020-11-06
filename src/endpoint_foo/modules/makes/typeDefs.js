import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    makes(category: String): Makes
  }

  type Makes {
    top: [Make]
    all: [Make]
  }

  type Make {
    id: ID!
    label: String!
    slugLabel: String!
  }
`;
