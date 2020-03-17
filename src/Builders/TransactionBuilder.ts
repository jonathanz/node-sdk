import {
  IPaymentMethod,
  PaymentMethod,
  TransactionModifier,
  TransactionType,
} from "../";
import { BaseBuilder } from "./BaseBuilder";

export abstract class TransactionBuilder<T> extends BaseBuilder<T> {
  public paymentMethod: PaymentMethod;
  public transactionType: TransactionType;
  public transactionModifier = TransactionModifier.None;
  private _secretApiKey: string;
  public get secretApiKey(): string {
    return this._secretApiKey;
  }
  public set secretApiKey(value: string) {
    this._secretApiKey = value;
  }

  public constructor(type: TransactionType, paymentMethod?: IPaymentMethod) {
    super();

    this.transactionType = type;
    if (paymentMethod) {
      this.paymentMethod = paymentMethod as PaymentMethod;
    }
  }

  public withModifier(modifier?: TransactionModifier) {
    if (modifier !== undefined) {
      this.transactionModifier = modifier;
    }
    return this;
  }

  public withPaymentMethod(paymentMethod?: IPaymentMethod) {
    if (paymentMethod !== undefined) {
      this.paymentMethod = paymentMethod as PaymentMethod;
    }
    return this;
  }

  public withSecretApiKey(secretApiKey: string) {
    if (secretApiKey !== undefined) {
      this.secretApiKey = secretApiKey;
    }
    return this;
  }  
}
