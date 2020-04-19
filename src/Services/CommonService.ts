import { TransactionType, TestCredentialsBuilder } from "..";
import { Common } from "src/Entities/Common";

export class CommonService {
  public static testCredentials(): TestCredentialsBuilder<Common> {
    return new TestCredentialsBuilder<Common>(
      TransactionType.TestCredentials,
    );
  }

}
