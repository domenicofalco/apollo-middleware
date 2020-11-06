export const resolvers = {
  Query: {
    locationByCoords: (_, _args, { dataSources }) => {
      const { lat, long } = _args;

      if (!lat || !long) {
        return null;
      }

      return dataSources.locationByCoordsAPI.getLocationByCoords({
        lat,
        long
      });
    }
  }
};
