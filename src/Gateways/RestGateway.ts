import { Gateway } from "./Gateway";
import { IDictionary } from "src/Builders";

export abstract class RestGateway extends Gateway {
  public static AUTHORIZATION_HEADER = "Authorization";

  public constructor() {
    super("application/json");
  }

  public doTransaction(
    verb: string,
    endpoint: string,
    requestData?: string,
    headers?: IDictionary<string>,
  ): Promise<string> {
    return this.sendRequest(verb, endpoint, requestData, undefined, headers);
  }
}
