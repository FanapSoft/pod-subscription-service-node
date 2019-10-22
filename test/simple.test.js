// External Modules
const expect = require('chai').expect;

// Main Module
const PodSubscriptionService = require('../lib/main');

let apiToken = 'e801898dced840248b0325facb863d8b';
let guildCode = 'INFORMATION_TECHNOLOGY_GUILD';
let productId = 15530;
let userId = 1453911;
let podSubscription = new PodSubscriptionService({ apiToken: apiToken });

// #1
describe('API: addSubscriptionPlan', function () {
  this.timeout(10000);
  let addSubscriptionPlanData = {
    // ------ REQUIRED ------
    name: 'PLAN1',
    price: 100,
    periodTypeCode: 'SUBSCRIPTION_PLAN_PERIOD_TYPE_DAILY', // 'SUBSCRIPTION_PLAN_PERIOD_TYPE_YEARLY' | 'SUBSCRIPTION_PLAN_PERIOD_TYPE_MONTHLY' | 'SUBSCRIPTION_PLAN_PERIOD_TYPE_DAILY'
    periodTypeCount: 10,
    type: 'SUBSCRIPTION_PLAN_TYPE_CASH', // 'SUBSCRIPTION_PLAN_TYPE_BLOCK' | 'SUBSCRIPTION_PLAN_TYPE_CASH'
    productId: productId,
    guildCode: guildCode

    // ------ OPTIONAL ------
    // usageCountLimit: 2,
    // usageAmountLimit: 10,
    // permittedGuildCode: [guildCode]
    // permittedBusinessId: [],
    // permittedProductId: [],
    // currencyCode: 'IRR',
  };
  it('correct request', function (done) {
    podSubscription.addSubscriptionPlan(addSubscriptionPlanData)
      .then(function (result) {
        console.log(result);
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('ott');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #2
describe('API: subscriptionPlanList', function () {
  this.timeout(10000);
  let subscriptionPlanListData = {
    // ------ REQUIRED ------
    offset: 0,
    size: 10,

    // ------ OPTIONAL ------
    // id: 1,
    // periodTypeCode: 'SUBSCRIPTION_PLAN_PERIOD_TYPE_DAILY', // 'SUBSCRIPTION_PLAN_PERIOD_TYPE_YEARLY' | 'SUBSCRIPTION_PLAN_PERIOD_TYPE_MONTHLY' | 'SUBSCRIPTION_PLAN_PERIOD_TYPE_DAILY'
    // periodTypeCountFrom: 10,
    // periodTypeCountTo: 20,
    // fromPrice: 200,
    // toPrice: 1590,
    // typeCode: 'SUBSCRIPTION_PLAN_TYPE_CASH', // 'SUBSCRIPTION_PLAN_TYPE_BLOCK' | 'SUBSCRIPTION_PLAN_TYPE_CASH'
    // enable: true,
    // permittedGuildCode: [guildCode]
    // permittedBusinessId: [148],
    // permittedProductId: [],
    // currencyCode: 'IRR'
  };
  it('correct request', function (done) {
    podSubscription.subscriptionPlanList(subscriptionPlanListData)
      .then(function (result) {
        console.log(JSON.stringify(result, null, 2), '==================', result.result.length, '=======================', result.count);
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #3
describe('API: updateSubscriptionPlan', function () {
  this.timeout(10000);
  let updateSubscriptionPlanData = {
    // ------ REQUIRED ------
    id: 124

    // ------ OPTIONAL ------
    // periodTypeCode: 'SUBSCRIPTION_PLAN_PERIOD_TYPE_DAILY', // 'SUBSCRIPTION_PLAN_PERIOD_TYPE_YEARLY' | 'SUBSCRIPTION_PLAN_PERIOD_TYPE_MONTHLY' | 'SUBSCRIPTION_PLAN_PERIOD_TYPE_DAILY'
    // periodTypeCount: 10,
    // usageCountLimit: 10,
    // name: 'WPLAN2',
    // price: 1523
    // enable: true
  };
  it('correct request', function (done) {
    podSubscription.updateSubscriptionPlan(updateSubscriptionPlanData)
      .then(function (result) {
        console.log(result);
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function () {
        // console.log(error);
        done(new Error());
      });
  });
});

// #4
describe('API: requestSubscription', function () {
  this.timeout(10000);
  let requestSubscriptionData = {
    // ------ REQUIRED ------
    subscriptionPlanId: 321,
    userId: userId

    // ------ OPTIONAL ------
  };
  it('correct request', function (done) {
    podSubscription.requestSubscription(requestSubscriptionData)
      .then(function (result) {
        console.log(result);
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #5
describe('API: confirmSubscription', function () {
  this.timeout(10000);
  let confirmSubscriptionData = {
    // ------ REQUIRED ------
    subscriptionId: 303,
    code: '4008507'

    // ------ OPTIONAL ------
  };
  it('correct request', function (done) {
    podSubscription.confirmSubscription(confirmSubscriptionData)
      .then(function (result) {
        console.log(result);
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #6
describe('API: subscriptionList', function () {
  this.timeout(10000);
  let subscriptionListData = {
    // ------ REQUIRED ------
    subscriptionPlanId: 124,
    offset: 0,
    size: 10

    // ------ OPTIONAL ------
  };
  it('correct request', function (done) {
    podSubscription.subscriptionList(subscriptionListData)
      .then(function (result) {
        console.log(JSON.stringify(result, null, 2));
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #7
describe('API: consumeSubscription', function () {
  this.timeout(10000);
  let consumeSubscriptionData = {
    // ------ REQUIRED ------
    id: 303,
    usedAmount: 3

    // ------ OPTIONAL ------
  };
  it('correct request', function (done) {
    podSubscription.consumeSubscription(consumeSubscriptionData)
      .then(function (result) {
        console.log(result);
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});
