import {
  ApiError,
  IPaymentGateway,
  IRecurringService,
  PayPlanConnector,
  PorticoConnector,
  RealexConnector,
  ServicesConfig,
} from "./";

export class ServicesContainer {
  private static _instance: ServicesContainer;
  private _gateway: IPaymentGateway;
  private _recurring: IRecurringService;

  public static instance(): ServicesContainer {
    if (ServicesContainer._instance === null) {
      throw new ApiError("Services container not configured.");
    }

    return ServicesContainer._instance;
  }

  public static configure(config: ServicesConfig): ServicesContainer {
    config.validate();
    let servicesContainer: ServicesContainer | undefined;
    if (config.merchantId && config.merchantId !== "") {
      const gateway = new RealexConnector();
      gateway.merchantId = config.merchantId;
      gateway.sharedSecret = config.sharedSecret;
      gateway.accountId = config.accountId;
      gateway.channel = config.channel;
      gateway.rebatePassword = config.rebatePassword;
      gateway.refundPassword = config.refundPassword;
      gateway.timeout = config.timeout;
      gateway.serviceUrl = config.serviceUrl;
      gateway.hostedPaymentConfig = config.hostedPaymentConfig;
      gateway.channel = config.channel;
      servicesContainer = new ServicesContainer(gateway, gateway);
      ServicesContainer._instance = servicesContainer;
    } else {
      const gateway = new PorticoConnector();
      gateway.siteId = config.siteId;
      gateway.licenseId = config.licenseId;
      gateway.deviceId = config.deviceId;
      gateway.username = config.username;
      gateway.password = config.password;
      gateway.secretApiKey = config.secretApiKey;
      gateway.developerId = config.developerId;
      gateway.versionNumber = config.versionNumber;
      gateway.timeout = config.timeout;
      gateway.serviceUrl =
        config.serviceUrl + "/Hps.Exchange.PosGateway/PosGatewayService.asmx";
      const payplan = new PayPlanConnector();
      payplan.siteId = config.siteId;
      payplan.licenseId = config.licenseId;
      payplan.deviceId = config.deviceId;
      payplan.username = config.username;
      payplan.password = config.password;
      payplan.secretApiKey = config.secretApiKey;
      payplan.developerId = config.developerId;
      payplan.versionNumber = config.versionNumber;
      payplan.timeout = config.timeout;
      payplan.serviceUrl = config.serviceUrl
        + (config.serviceUrl.indexOf('cert.') ? "/Portico.PayPlan.v2/" : "/payplan.v2/");
      servicesContainer = new ServicesContainer(gateway, payplan);
      ServicesContainer._instance = servicesContainer;
    }
    return servicesContainer;
  }

  public constructor(gateway?: IPaymentGateway, recurring?: IRecurringService) {
    if (gateway) {
      this._gateway = gateway;
    }
    if (recurring) {
      this._recurring = recurring;
    }
  }

  public getClient(): IPaymentGateway {
    return this._gateway;
  }

  public getRecurringClient(): IRecurringService {
    return this._recurring;
  }
}
