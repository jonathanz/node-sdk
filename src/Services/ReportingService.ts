import { ReportType, TransactionReportBuilder, TransactionSummary } from "../";
import { Transaction } from "src/Entities";

export class ReportingService {
  public static activity(): TransactionReportBuilder<TransactionSummary[]> {
    return new TransactionReportBuilder<TransactionSummary[]>(
      ReportType.Activity,
    );
  }

  public static transactionDetail(
    transactionId?: string,
  ): TransactionReportBuilder<TransactionSummary> {
    return new TransactionReportBuilder<TransactionSummary>(
      ReportType.TransactionDetail,
    ).withTransactionId(transactionId);
  }

  public static findTransactions(
    clientTransactionId?: string,
    transactionId?: string,
  ): TransactionReportBuilder<Transaction> {
    return new TransactionReportBuilder<Transaction>(
      ReportType.FindTransactions,
    ).withTransactionId(transactionId).withClientTransactionId(clientTransactionId);
  }
}
