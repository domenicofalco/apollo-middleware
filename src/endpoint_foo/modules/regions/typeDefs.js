import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    regions: [Region!]!
  }

  type Region {
    id: ID!
    value: String!
  }
`;
