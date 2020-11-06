// https://github.com/apollographql/fullstack-tutorial/blob/master/final/server/src/__tests__/integration.js
import { ApolloServer } from "apollo-server-express";
import { createTestClient } from "apollo-server-testing";
import { gql } from "apollo-server-express";
import { schema, dataSource } from "../";
import { makes } from "../mocks/data";

const { makesAPI } = dataSource;

const GET_MAKES = gql`
  query {
    makes(category: "cars") {
      top {
        id
        slugLabel
        label
      }
      all {
        id
        label
        slugLabel
      }
    }
  }
`;

describe("Makes", () => {
  it("fetches list of makes", async () => {
    const server = new ApolloServer({
      schema,
      dataSources: () => ({ makesAPI }),
      context: {}
    });

    makesAPI.getMakes = jest.fn(() => makes);

    const { query } = createTestClient(server);
    const res = await query({ query: GET_MAKES });

    expect(res).toMatchSnapshot();
  });
});
