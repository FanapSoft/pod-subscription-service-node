module.exports = {
  moduleConfig: {
    type: 'object',
    properties: {
      apiToken: {
        type: 'string'
      },
      tokenIssuer: {
        type: 'integer'
      }
    },
    required: ['apiToken'],
    additionalProperties: false
  },

  // #1
  addSubscriptionPlan: {
    body: {
      type: 'object',
      properties: {
        token: {
          type: 'string'
        },
        tokenIssuer: {
          type: 'integer'
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        name: {
          notEmpty: []
        },
        price: {
          type: 'number'
        },
        periodTypeCode: {
          type: 'string',
          enum: ['SUBSCRIPTION_PLAN_PERIOD_TYPE_YEARLY', 'SUBSCRIPTION_PLAN_PERIOD_TYPE_MONTHLY', 'SUBSCRIPTION_PLAN_PERIOD_TYPE_DAILY']
        },
        periodTypeCount: {
          type: 'integer'
        },
        usageCountLimit: {
          type: 'integer'
        },
        usageAmountLimit: {
          type: 'number'
        },
        type: {
          type: 'string',
          enum: ['SUBSCRIPTION_PLAN_TYPE_BLOCK', 'SUBSCRIPTION_PLAN_TYPE_CASH']
        },
        guildCode: {
          notEmpty: []
        },
        permittedGuildCode: {
          type: 'array',
          items: {
            type: 'string'
          }
        },
        permittedBusinessId: {
          type: 'array',
          items: {
            type: 'integer'
          }
        },
        permittedProductId: {
          type: 'array',
          items: {
            type: 'integer'
          }
        },
        currencyCode: {
          type: 'string'
        },
        productId: {
          type: 'integer'
        }
      },
      required: ['token', 'tokenIssuer', 'name', 'price', 'periodTypeCode', 'periodTypeCount', 'type', 'productId', 'guildCode'],
      additionalProperties: false
    }
  },

  // #2
  subscriptionPlanList: {
    body: {
      type: 'object',
      properties: {
        token: {
          type: 'string'
        },
        tokenIssuer: {
          type: 'integer'
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        id: {
          type: 'integer'
        },
        periodTypeCode: {
          type: 'string',
          enum: ['SUBSCRIPTION_PLAN_PERIOD_TYPE_YEARLY', 'SUBSCRIPTION_PLAN_PERIOD_TYPE_MONTHLY', 'SUBSCRIPTION_PLAN_PERIOD_TYPE_DAILY']
        },
        periodTypeCountFrom: {
          type: 'integer'
        },
        periodTypeCountTo: {
          type: 'integer'
        },
        fromPrice: {
          type: 'number'
        },
        toPrice: {
          type: 'number'
        },
        typeCode: {
          type: 'string',
          enum: ['SUBSCRIPTION_PLAN_TYPE_BLOCK', 'SUBSCRIPTION_PLAN_TYPE_CASH']
        },
        offset: {
          type: 'integer',
          minimum: 0
        },
        size: {
          type: 'integer',
          minimum: 1
        },
        enable: {
          type: 'boolean'
        },
        permittedGuildCode: {
          type: 'array',
          items: {
            type: 'string'
          }
        },
        permittedBusinessId: {
          type: 'array',
          items: {
            type: 'integer'
          }
        },
        permittedProductId: {
          type: 'array',
          items: {
            type: 'integer'
          }
        },
        currencyCode: {
          type: 'string'
        }
      },
      required: ['token', 'tokenIssuer', 'offset', 'size'],
      additionalProperties: false
    }
  },

  // #3
  updateSubscriptionPlan: {
    body: {
      type: 'object',
      properties: {
        token: {
          type: 'string'
        },
        tokenIssuer: {
          type: 'integer'
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        id: {
          type: 'integer'
        },
        periodTypeCode: {
          type: 'string',
          enum: ['SUBSCRIPTION_PLAN_PERIOD_TYPE_YEARLY', 'SUBSCRIPTION_PLAN_PERIOD_TYPE_MONTHLY', 'SUBSCRIPTION_PLAN_PERIOD_TYPE_DAILY']
        },
        periodTypeCount: {
          type: 'integer'
        },
        usageCountLimit: {
          type: 'integer'
        },
        name: {
          type: 'string'
        },
        price: {
          type: 'number'
        },
        enable: {
          type: 'boolean'
        }
      },
      required: ['token', 'tokenIssuer', 'id'],
      additionalProperties: false
    }
  },

  // #4
  requestSubscription: {
    body: {
      type: 'object',
      properties: {
        token: {
          type: 'string'
        },
        tokenIssuer: {
          type: 'integer'
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        subscriptionPlanId: {
          type: 'integer'
        },
        userId: {
          type: 'integer'
        }
      },
      required: ['token', 'tokenIssuer', 'subscriptionPlanId', 'userId'],
      additionalProperties: false
    }
  },

  // #5
  confirmSubscription: {
    body: {
      type: 'object',
      properties: {
        token: {
          type: 'string'
        },
        tokenIssuer: {
          type: 'integer'
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        subscriptionId: {
          type: 'integer'
        },
        code: {
          type: 'string'
        }
      },
      required: ['token', 'tokenIssuer', 'subscriptionId', 'code'],
      additionalProperties: false
    }
  },

  // #6
  subscriptionList: {
    body: {
      type: 'object',
      properties: {
        token: {
          type: 'string'
        },
        tokenIssuer: {
          type: 'integer'
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        subscriptionPlanId: {
          type: 'integer'
        },
        offset: {
          type: 'integer',
          minimum: 0
        },
        size: {
          type: 'integer',
          minimum: 1
        }
      },
      required: ['token', 'tokenIssuer', 'subscriptionPlanId', 'offset', 'size'],
      additionalProperties: false
    }
  },

  // #7
  consumeSubscription: {
    body: {
      type: 'object',
      properties: {
        token: {
          type: 'string'
        },
        tokenIssuer: {
          type: 'integer'
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        id: {
          type: 'integer'
        },
        usedAmount: {
          type: 'number'
        }
      },
      required: ['token', 'tokenIssuer', 'id'],
      additionalProperties: false
    }
  }
};
