// https://github.com/apollographql/fullstack-tutorial/blob/master/final/server/src/__tests__/integration.js
import { ApolloServer } from "apollo-server-express";
import { createTestClient } from "apollo-server-testing";
import { gql } from "apollo-server-express";
import { schema, dataSource } from "../";
import { locationByCoords } from "../mocks/data";

const { locationByCoordsAPI } = dataSource;

const GET_LOCATION = gql`
  query {
    locationByCoords(lat: "45.464664", long: "9.188540") {
      id
      value
    }
  }
`;

describe("LocationByCoords", () => {
  it("fetches location by its coords", async () => {
    const server = new ApolloServer({
      schema,
      dataSources: () => ({ locationByCoordsAPI }),
      context: {}
    });

    locationByCoordsAPI.getLocationByCoords = jest.fn(() => locationByCoords);

    const { query } = createTestClient(server);
    const res = await query({ query: GET_LOCATION });

    expect(res).toMatchSnapshot();
  });
});
