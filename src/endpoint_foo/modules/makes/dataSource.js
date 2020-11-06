import { ENDPOINT_FOO } from "config";
import { RESTDataSource } from "apollo-datasource-rest";

export class MakesAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = ENDPOINT_FOO;
  }

  getMakes(category) {
    return this.get(`makes?category=${category}`);
  }
}
