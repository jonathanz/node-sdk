import { IRecurringEntity, RecurringBuilder } from "../";

export interface IRecurringService {
  supportsRetrieval: boolean;
  supportsUpdatePaymentDetails: boolean;
  processRecurring<T extends IRecurringEntity>(
    builder: RecurringBuilder<T>,
    secretApiKey?: string,
  ): Promise<T>;
}
