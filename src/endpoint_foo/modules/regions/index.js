import { GRAPHQL_MOCK } from "config";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { addMockFunctionsToSchema } from "apollo-server-express";
import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";
import { RegionsAPI } from "./dataSource";
import mocks from "./mocks/resolvers";

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

export const dataSource = {
  regionsAPI: new RegionsAPI()
};

addMockFunctionsToSchema({
  schema,
  mocks,
  preserveResolvers: GRAPHQL_MOCK === "0"
});
