import { regions } from "./data";

export default {
  Query: () => ({
    regions: () => {
      return regions;
    }
  })
};
