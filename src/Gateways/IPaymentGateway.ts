import {
  AuthorizationBuilder,
  ManagementBuilder,
  ReportBuilder,
  CommonBuilder,
  Transaction,
} from "../";

export interface IPaymentGateway {
  supportsHostedPayments: boolean;
  processAuthorization(builder: AuthorizationBuilder, secretApiKey?: string): Promise<Transaction>;
  manageTransaction(builder: ManagementBuilder, secretApiKey?: string): Promise<Transaction>;
  processReport<T>(builder: ReportBuilder<T>, secretApiKey?: string): Promise<T>;
  processCommon<T>(builder: CommonBuilder<T>, secretApiKey?: string): Promise<T>;
  serializeRequest(builder: AuthorizationBuilder): string;
}
