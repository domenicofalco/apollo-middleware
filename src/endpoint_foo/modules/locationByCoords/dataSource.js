import { ENDPOINT_FOO } from "config";
import { RESTDataSource } from "apollo-datasource-rest";

export class LocationByCoordsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = ENDPOINT_FOO;
  }

  getLocationByCoords({ lat, long }) {
    return this.get(`locations?latitude=${lat}&longitude=${long}`);
  }
}
