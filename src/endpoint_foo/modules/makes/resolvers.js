export const resolvers = {
  Query: {
    makes: (_, _args, { dataSources }) => {
      if (!_args.category) {
        return {
          top: [],
          all: []
        };
      }

      return dataSources.makesAPI.getMakes(_args.category);
    }
  }
};
