import { locationByCoords } from "./data";

export default {
  Query: () => ({
    locationByCoords: () => {
      return locationByCoords;
    }
  })
};
