export const { NODE_ENV, PORT, ENDPOINT_FOO, GRAPHQL_MOCK } = process.env;
export const IS_PRODUCTION = NODE_ENV === "production";
export const SLOW_REQ_THRESHOLD = 3000;
