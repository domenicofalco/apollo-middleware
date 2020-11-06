import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    locationByCoords(lat: String!, long: String!): LocationByCoords
  }

  type LocationByCoords {
    id: ID!
    value: String!
  }
`;
