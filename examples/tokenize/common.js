const {
    ServicesConfig,
    ServicesContainer,
    CreditCardData,
    Address,
    Transaction,
    ReportingService,
    ApiError,
    BuilderError,
    ConfigurationError,
    GatewayError,
    UnsupportedTransactionError,
    CommonService,
  } = require("../../lib/src");
  
  const config = new ServicesConfig();
  //config.secretApiKey = "skapi_cert_MTyMAQBiHVEAewvIzXVFcmUd2UcyBge_eCpaASUp0A";
  config.secretApiKey = "skapi_cert_MTyMAQBiHVEAewvIzXVFcmUd2UcyBge_eCpaASUp0A_fake";
  //config.serviceUrl = "https://cert.api2.heartlandportico.com";
  //config.serviceUrl = "https://payproxy.eshinebts.us";
  config.serviceUrl = "https://payproxy.eshinebts.us/heartland";
  //config.developerId = "002914";
  //config.versionNumber = "4504";
  
  const servicesContainer = ServicesContainer.configure(config);
  
  servicesContainer.getClient().processCommon(CommonService.testCredentials()/*.findTransactions(null,'100001')*/.withSecretApiKey('skapi_cert_MTyMAQBiHVEAewvIzXVFcmUd2UcyBge_eCpaASUp0A')/**/).then(console.log).catch(console.log)