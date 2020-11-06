import { makes } from "./data";

export default {
  Query: () => ({
    makes: () => {
      return makes;
    }
  })
};
