import { ServicesContainer, TransactionType } from "..";
import { BaseBuilder } from "./BaseBuilder";

export abstract class CommonBuilder<T> extends BaseBuilder<T> {
  public transactionType: TransactionType;

  public constructor(type: TransactionType) {
    super();
    this.transactionType = type;
  }

  public execute(): Promise<T> {
    super.execute();
    return ServicesContainer.instance()
      .getClient()
      .processCommon(this);
  }
}
