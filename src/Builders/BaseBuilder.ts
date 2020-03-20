import { Validations } from "./BaseBuilder/Validations";

export abstract class BaseBuilder<T> {
  private _secretApiKey: string;
  public get secretApiKey(): string {
    return this._secretApiKey;
  }
  public set secretApiKey(value: string) {
    this._secretApiKey = value;
  }

  protected validations: Validations;
  [key: string]: any;

  public constructor() {
    this.validations = new Validations();
    this.setupValidations();
  }

  public execute(): Promise<T | undefined> {
    this.validations.validate(this);
    return Promise.resolve(undefined);
  }

  protected abstract setupValidations(): void;
  public withSecretApiKey(secretApiKey: string) {
    if (secretApiKey !== undefined) {
      this.secretApiKey = secretApiKey;
    }
    return this;
  }   
}
