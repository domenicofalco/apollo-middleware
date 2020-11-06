import { ENDPOINT_FOO } from "config";
import { RESTDataSource } from "apollo-datasource-rest";

export class RegionsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = ENDPOINT_FOO;
  }

  getRegions() {
    return this.get("locations/regions");
  }
}
