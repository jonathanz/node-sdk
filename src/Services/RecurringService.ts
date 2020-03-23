import { IRecurringEntity, RecurringBuilder, TransactionType } from "../";

export class RecurringService {
  public static create<T extends IRecurringEntity>(entity: T, ): RecurringBuilder<T> {
    return new RecurringBuilder<T>(TransactionType.Create, entity);
  }

  public static delete<T extends IRecurringEntity>(entity: T, _force = false, ): RecurringBuilder<T> {
    return new RecurringBuilder<T>(TransactionType.Delete, entity);
  }

  public static edit<T extends IRecurringEntity>(entity: T, ): RecurringBuilder<T> {
    return new RecurringBuilder<T>(TransactionType.Edit, entity);
  }

  public static get<T extends IRecurringEntity>(key: string, ): RecurringBuilder<T> {
    const entity = {
      key,
    };
    return new RecurringBuilder<T>(
      TransactionType.Fetch,
      (entity as any) as T,
    );
  }

  public static search<T extends IRecurringEntity>(): RecurringBuilder<T> {
    return new RecurringBuilder<T>(TransactionType.Search);
  }
}
