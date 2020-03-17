import {
  AuthorizationBuilder,
  ManagementBuilder,
  ReportBuilder,
  Transaction,
} from "../";

export interface IPaymentGateway {
  supportsHostedPayments: boolean;
  processAuthorization(builder: AuthorizationBuilder, secretApiKey?: string): Promise<Transaction>;
  manageTransaction(builder: ManagementBuilder, secretApiKey?: string): Promise<Transaction>;
  processReport<T>(builder: ReportBuilder<T>, secretApiKey?: string): Promise<T>;
  serializeRequest(builder: AuthorizationBuilder): string;
}
