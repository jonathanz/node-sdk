import { IRecurringEntity, RecurringBuilder, TransactionType } from "../";

export class RecurringService {
  public static create<T extends IRecurringEntity>(entity: T, secretApiKey?: string,) {
    return new RecurringBuilder<T>(TransactionType.Create, entity).execute(secretApiKey);
  }

  public static delete<T extends IRecurringEntity>(entity: T, _force = false, secretApiKey?: string,) {
    return new RecurringBuilder<T>(TransactionType.Delete, entity).execute(secretApiKey);
  }

  public static edit<T extends IRecurringEntity>(entity: T, secretApiKey?: string,) {
    return new RecurringBuilder<T>(TransactionType.Edit, entity).execute(secretApiKey);
  }

  public static get<T extends IRecurringEntity>(key: string, secretApiKey?: string,) {
    const entity = {
      key,
    };
    return new RecurringBuilder<T>(
      TransactionType.Fetch,
      (entity as any) as T,
    ).execute(secretApiKey);
  }

  public static search<T extends IRecurringEntity>() {
    return new RecurringBuilder<T>(TransactionType.Search);
  }
}
