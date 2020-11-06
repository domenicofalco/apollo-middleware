export const resolvers = {
  Query: {
    regions: (_, __, { dataSources }) => {
      return dataSources.regionsAPI.getRegions();
    }
  }
};
