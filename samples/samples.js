const PodSubscriptionService = require('pod-subscription-service');

// Variable Declaration & Initialization
let podSubscription = new PodSubscriptionService({
  apiToken: 'API TOKEN'
});

// *****************************************************************
// #1
// function: addSubscriptionPlan
let addSubscriptionPlanData = {
  // ------ REQUIRED ------
  name: 'PLAN1',
  price: 0,
  periodTypeCode: 'SUBSCRIPTION_PLAN_PERIOD_TYPE_DAILY', // 'SUBSCRIPTION_PLAN_PERIOD_TYPE_YEARLY' | 'SUBSCRIPTION_PLAN_PERIOD_TYPE_MONTHLY' | 'SUBSCRIPTION_PLAN_PERIOD_TYPE_DAILY'
  periodTypeCount: 0,
  type: 'SUBSCRIPTION_PLAN_TYPE_CASH', // 'SUBSCRIPTION_PLAN_TYPE_BLOCK' | 'SUBSCRIPTION_PLAN_TYPE_CASH'
  productId: 0,
  guildCode: 'GUILD CODE'

  // ------ OPTIONAL ------
  // usageCountLimit: 0,
  // usageAmountLimit: 0,
  // permittedGuildCode: ['GUILD CODE', 'GUILD CODE', 'GUILD CODE'],
  // permittedBusinessId: [0, 0, 0],
  // permittedProductId: [0, 0, 0],
  // currencyCode: 'IRR'
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiToken: 'SC API TOKEN'
};

podSubscription.addSubscriptionPlan(addSubscriptionPlanData)
  .then(function (result) {
    console.log('function: addSubscriptionPlan ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error addSubscriptionPlan ============>', error);
  });

// *****************************************************************
// #2
// function: subscriptionPlanList
let subscriptionPlanListData = {
  // ------ REQUIRED ------
  offset: 0,
  size: 10

  // ------ OPTIONAL ------
  // id: 0,
  // periodTypeCode: 'SUBSCRIPTION_PLAN_PERIOD_TYPE_DAILY', // 'SUBSCRIPTION_PLAN_PERIOD_TYPE_YEARLY' | 'SUBSCRIPTION_PLAN_PERIOD_TYPE_MONTHLY' | 'SUBSCRIPTION_PLAN_PERIOD_TYPE_DAILY'
  // periodTypeCountFrom: 0,
  // periodTypeCountTo: 0,
  // fromPrice: 0,
  // toPrice: 0,
  // typeCode: 'SUBSCRIPTION_PLAN_TYPE_CASH', // 'SUBSCRIPTION_PLAN_TYPE_BLOCK' | 'SUBSCRIPTION_PLAN_TYPE_CASH'
  // enable: true,
  // permittedGuildCode: ['GUILD CODE', 'GUILD CODE', 'GUILD CODE'],
  // permittedBusinessId: [0, 0, 0],
  // permittedProductId: [0, 0, 0],
  // currencyCode: 'IRR'
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiToken: 'SC API TOKEN'
};

podSubscription.subscriptionPlanList(subscriptionPlanListData)
  .then(function (result) {
    console.log('function: subscriptionPlanList ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error subscriptionPlanList ============>', error);
  });

// *****************************************************************
// #3
// function: updateSubscriptionPlan
let updateSubscriptionPlanData = {
  // ------ REQUIRED ------
  id: 0,

  // ------ OPTIONAL ------
  // periodTypeCode: 'SUBSCRIPTION_PLAN_PERIOD_TYPE_DAILY', // 'SUBSCRIPTION_PLAN_PERIOD_TYPE_YEARLY' | 'SUBSCRIPTION_PLAN_PERIOD_TYPE_MONTHLY' | 'SUBSCRIPTION_PLAN_PERIOD_TYPE_DAILY'
  // periodTypeCount: 0,
  // usageCountLimit: 0,
  // name: 'NAME2',
  // price: 0
  // enable: true
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiToken: 'SC API TOKEN'
};

podSubscription.updateSubscriptionPlan(updateSubscriptionPlanData)
  .then(function (result) {
    console.log('function: updateSubscriptionPlan ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error updateSubscriptionPlan ============>', error);
  });

// *****************************************************************
// #4
// function: requestSubscription
let requestSubscriptionData = {
  // ------ REQUIRED ------
  subscriptionPlanId: 0,
  userId: 0

  // ------ OPTIONAL ------
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiToken: 'SC API TOKEN'
};

podSubscription.requestSubscription(requestSubscriptionData)
  .then(function (result) {
    console.log('function: requestSubscription ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error requestSubscription ============>', error);
  });

// *****************************************************************
// #5
// function: confirmSubscription
let confirmSubscriptionData = {
  // ------ REQUIRED ------
  subscriptionId: 0,
  code: 'CODE'

  // ------ OPTIONAL ------
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiToken: 'SC API TOKEN'
};

podSubscription.confirmSubscription(confirmSubscriptionData)
  .then(function (result) {
    console.log('function: confirmSubscription ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error confirmSubscription ============>', error);
  });

// *****************************************************************
// #6
// function: subscriptionList
let subscriptionListData = {
  // ------ REQUIRED ------
  subscriptionPlanId: 124,
  offset: 0,
  size: 10

  // ------ OPTIONAL ------
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiToken: 'SC API TOKEN'
};

podSubscription.subscriptionList(subscriptionListData)
  .then(function (result) {
    console.log('function: subscriptionList ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error subscriptionList ============>', error);
  });

// *****************************************************************
// #7
// function: consumeSubscription

let consumeSubscriptionData = {
  // ------ REQUIRED ------
  id: 10,
  usedAmount: 100

  // ------ OPTIONAL ------
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiToken: 'SC API TOKEN'
};

podSubscription.consumeSubscription(consumeSubscriptionData)
  .then(function (result) {
    console.log('function: consumeSubscription ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error consumeSubscription ============>', error);
  });

// *****************************************************************
