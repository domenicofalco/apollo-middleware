import express from "express";
import { ApolloServer } from "apollo-server-express";
import { mergeSchemas } from "@graphql-tools/merge";
import * as endpoint_foo from "./src/endpoint_foo";
import { IS_PRODUCTION, PORT, SLOW_REQ_THRESHOLD } from "config";
import responseTime from "response-time";
import pino from "pino";

const app = express();
const logger = pino();
const port = PORT || 5000;
const { name, version } = require("./package.json");

app.use(
  responseTime((req, res, time) => {
    const duration = time.toFixed(3) + " ms";
    res.append("X-Response-Time", duration);

    if (time >= SLOW_REQ_THRESHOLD) {
      logger.info({
        "@app": name,
        version,
        type: "SLOW REQ",
        duration: duration,
        url: req.url,
        queryName: req.body.operationName,
        reqBody: JSON.stringify(req.body)
      });
    }
  })
);

const dataSources = () => ({ ...endpoint_foo.dataSources });
const schema = mergeSchemas({ schemas: [...endpoint_foo.schemas] });

const server = new ApolloServer({
  schema,
  dataSources,
  context: req => ({ req }),
  playground: !IS_PRODUCTION
});

server.applyMiddleware({ app });

app.listen({ port }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
  )
);
