// endpoint_foo modules
import * as regions from "./modules/regions";
import * as makes from "./modules/makes";
import * as locationByCoords from "./modules/locationByCoords";

export const dataSources = {
  ...regions.dataSource,
  ...makes.dataSource,
  ...locationByCoords.dataSource
};

export const schemas = [regions.schema, makes.schema, locationByCoords.schema];
