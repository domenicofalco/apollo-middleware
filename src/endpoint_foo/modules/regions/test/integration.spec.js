// https://github.com/apollographql/fullstack-tutorial/blob/master/final/server/src/__tests__/integration.js
import { ApolloServer } from "apollo-server-express";
import { createTestClient } from "apollo-server-testing";
import { gql } from "apollo-server-express";
import { schema, dataSource } from "../";
import { regions } from "../mocks/data";

const { regionsAPI } = dataSource;

const GET_REGIONS_QUERY = gql`
  query {
    regions {
      id
      value
    }
  }
`;

describe("Regions", () => {
  it("fetches list of regions", async () => {
    const server = new ApolloServer({
      schema,
      dataSources: () => ({ regionsAPI }),
      context: {}
    });

    regionsAPI.getRegions = jest.fn(() => regions);

    const { query } = createTestClient(server);
    const res = await query({ query: GET_REGIONS_QUERY });

    expect(res).toMatchSnapshot();
  });
});
