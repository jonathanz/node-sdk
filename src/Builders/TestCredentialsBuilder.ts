import { TransactionType } from "..";
import { CommonBuilder } from "./CommonBuilder";

export class TestCredentialsBuilder<T> extends CommonBuilder<T> {
  public deviceId: string;
  public endDate: Date;
  public startDate: Date;
  public transactionId: string;
  public clientTransactionId: string;

  public setupValidations() {
    this.validations
      .of("transactionType", TransactionType.TestCredentials);
  }

}
