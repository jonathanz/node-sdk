import { TransactionSummary } from "./TransactionSummary";
export class TransactionInfo extends TransactionSummary {
  public cardType: string;
  public cardSwiped: string;
  public cardHolderFirstName: string;
  public cardHolderLastName: string;
  public paymentType: string;
  public gratuityAmtInfo: string;
  public userName: string;
  public responseCode: string;
  public issTxnId: string;
  public batchSeqNbr: string;
  public batchCloseDT: string;
  public acctDataSrc: string;
  public uniqueDeviceId: string;
  public EMVChipCondition: string;
  public hasEMVTag: string;
  public hasEComPaymentData: string;
  public CAVVResultCode: string;
  public tokenPANLast4: string;
  public authenticatedSiteId: string;
  public authenticatedDeviceId: string;
  public responseMessage: string;
  public processedSiteId: string;
  public processedDeviceId: string;
  public cardBrandTxnId: string;
}