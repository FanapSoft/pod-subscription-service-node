/**
 * @namespace podSubscriptionService
 */

// POD Modules
const PodBaseService = require('pod-base-service');
const utils = require('pod-utilities');

// Project Modules
const schemas = require('./schemas');
const apiUrls = require('./urls');
const products = require('./products');

/**
 * podSubscriptionService
 * @memberOf podSubscriptionService
 */
class PodSubscriptionService extends PodBaseService {
  /**
   * @description This is the class constructor
   * @param {confObj} confObj
   */
  constructor(confObj) {
    if (!confObj) {
      confObj = {};
    }
    super(schemas, apiUrls, confObj, 'pod-subscription-service', true);
    this.clientInfo = {};
    this.clientInfo.apiToken = confObj.apiToken;
    this.clientInfo.tokenIssuer = confObj.tokenIssuer;
  }

  // #1 API Token
  /**
   * @description This function search and lists invoices
   * @param {addSubscriptionPlanObj} data
   * @returns {Promise}
   */
  addSubscriptionPlan(data) {
    let apiName = 'addSubscriptionPlan';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;

    delete data.token;
    delete data.tokenIssuer;

    let hasBrackets = {
      permittedGuildCode: true,
      permittedBusinessId: true,
      permittedProductId: true
    };
    return this.callService(apiName, headers, data, hasBrackets, true);
  }

  // #2 API Token
  /**
   * @description This function search and lists invoices
   * @param {subscriptionPlanListObj} data
   * @returns {Promise}
   */
  subscriptionPlanList(data) {
    let apiName = 'subscriptionPlanList';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;

    delete data.token;
    delete data.tokenIssuer;

    let hasBrackets = {
      permittedGuildCode: true,
      permittedBusinessId: true,
      permittedProductId: true
    };
    return this.callService(apiName, headers, data, hasBrackets, true);
  }

  // #3 API Token
  /**
   * @description This function search and lists invoices
   * @param {updateSubscriptionPlanObj} data
   * @returns {Promise}
   */
  updateSubscriptionPlan(data) {
    let apiName = 'updateSubscriptionPlan';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;

    delete data.token;
    delete data.tokenIssuer;
    return this.callService(apiName, headers, data, {}, true);
  }

  // #4 API Token
  /**
   * @description This function search and lists invoices
   * @param {requestSubscriptionObj} data
   * @returns {Promise}
   */
  requestSubscription(data) {
    let apiName = 'requestSubscription';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;

    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, {}, true);
  }

  // #5 API Token
  /**
   * @description This function search and lists invoices
   * @param {confirmSubscriptionObj} data
   * @returns {Promise}
   */
  confirmSubscription(data) {
    let apiName = 'confirmSubscription';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;

    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, {}, true);
  }

  // #6 API Token
  /**
   * @description This function search and lists invoices
   * @param {subscriptionListObj} data
   * @returns {Promise}
   */
  subscriptionList(data) {
    let apiName = 'subscriptionList';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;

    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, {}, true);
  }

  // #7 API Token
  /**
   * @description This function search and lists invoices
   * @param { businessFavoriteObj} data
   * @returns {Promise}
   */
  consumeSubscription(data) {
    let apiName = 'consumeSubscription';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;

    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, {}, true);
  }
}

module.exports = PodSubscriptionService;
